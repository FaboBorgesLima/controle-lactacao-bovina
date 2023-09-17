import React from "react";
import Realm from "realm";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_HEIGHT, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Vaca } from "../../realm/Vaca";
import EditarAnimal from "./EditarAnimal";
import AddAnimal from "./AddAnimal";
import VacaItem from "../../components/VacaItem";
import { Message } from "../../components";
import { useQuery } from "@realm/react";
import SelectDropdown from "react-native-select-dropdown";

const Rebanho = ( {route,navigation}:RebanhoProps ):JSX.Element => {

    const Vacas = route.params?.query? useQuery<Vaca>("Vaca").sorted("name").filtered(
        route.params.query,
        route.params.param1 ? route.params.param1 : 0,
        route.params.param2 ? route.params.param2 : 0,
        new Date(route.params.date3 ? route.params.date3 : 0),
        new Date(route.params.date4 ? route.params.date4 : 0)
        ) : 
    useQuery<Vaca>("Vaca").sorted("name");

    let message = Vacas[0] && !route.params?.query ? false : true;

    return (
        <View style={Styles.defaultBody}>
            <View style = {[Containers.main,{height:TOTAL_HEIGHT * 0.95}]}>
                <ScrollView contentContainerStyle={Containers.scrollView}>
                    <Pressable
                        style={[Styles.primaryButton,{marginTop:FONT_SIZE},Containers.marginBottom]}
                        onPress={ () => navigation.navigate("AddAnimal") }
                    >
                        <Text style={Styles.primaryH1}>+ Animal</Text>
                    </Pressable>
                    <Pressable 
                        style={[Styles.primaryButton,Containers.marginBottom]}
                        onPress={ () => navigation.navigate("AddProducao") }
                    >
                        <Text style={Styles.primaryH1}>+ Produção</Text>
                    </Pressable>
                    <SelectDropdown
                        buttonStyle={[Containers.button,StylesColors.background.secondary,Containers.marginBottom]}
                        buttonTextStyle={[Typography.h1,StylesColors.font.secondary]}
                        data={["Sem Filtros","Com Mastite","Pronta Para Ordenha","Pré-parto"].sort()}
                        defaultButtonText="Sem Filtros"
                        onSelect={ (teste)=>{

                            const TODAY = new Date().getTime();
                            const MONTH = new Date(30*24*60*60*1000).getTime() ;
                            const DAY = new Date(24*60*60*1000).getTime();

                            switch (teste){

                                case ("Com Mastite") :

                                    navigation.navigate("Rebanho",
                                    {
                                        query:"mastite == true",
                                    } );

                                break;

                                case ("Pronta Para Ordenha") :

                                    navigation.navigate("Rebanho",
                                    {
                                        query:" ( mastite == false )"+
                                        " AND ("+
                                            " ( monta >= $2 "+
                                            " OR monta == nil ) "+
                                        " AND ( pariu < $3 ) )",
                                        date3:new Date( TODAY - ( 7 * MONTH ) ).getTime(),
                                        date4:new Date( TODAY - ( 5 * DAY ) ).getTime()
                                    } );

                                break;

                                case ("Pré-parto") : 

                                    navigation.navigate("Rebanho",
                                    {
                                        query:" monta < $2 AND pariu < monta ",
                                        date3:new Date( TODAY - ( 7 * MONTH ) ).getTime(),
                                    } );
                                break;

                                default:
                                    navigation.navigate("Rebanho");
                                break;
                            }
                            
                        } }
                    />
                    
                    {Vacas.map( ( vaca ) => {
                        return (
                            <VacaItem 
                            key={vaca.name}
                            vaca={vaca}/>
                        )
                    })}
                    <Message title="Sem Registros Ainda" msg="Adicione algumas vacas e elas apareceram aqui." visible={message}/>
                </ScrollView>
            </View>
            <View style={[{height:TOTAL_HEIGHT*0.05},StylesColors.background.primary]}></View>
        </View>
    );
}

export {Rebanho, EditarAnimal, AddAnimal};

type RebanhoProps = NativeStackScreenProps<RootStackParamList,"Rebanho">;