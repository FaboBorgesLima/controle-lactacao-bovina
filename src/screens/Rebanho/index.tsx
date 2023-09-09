import React from "react";
import Realm from "realm";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_HEIGHT, TOTAL_WIDTH, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Vaca } from "../../realm/Vaca";
import EditarAnimal from "./EditarAnimal";
import AddAnimal from "./AddAnimal";
import VacaItem from "../../components/VacaItem";
import { NoData } from "../../components";
import { useQuery } from "@realm/react";

const Rebanho = ( {route,navigation}:RebanhoProps ):JSX.Element => {

    const Vacas = useQuery<Vaca>("Vaca");

    let additionalMessage = Vacas[0] ? <></>  : <NoData title="Sem Registros Ainda" msg="Adicione algumas vacas e elas apareceram aqui."/>;
    

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
                    
                    {Vacas.map( ( { name, born} ) => {
                        return (
                            <VacaItem key = {name} name = {name} born = {born}/>
                        )
                    })}
                    {additionalMessage}
                </ScrollView>
            </View>
            <View style={[{height:TOTAL_HEIGHT*0.05},StylesColors.background.primary]}></View>
        </View>
    );
}

export {Rebanho, EditarAnimal, AddAnimal};

type RebanhoProps = NativeStackScreenProps<RootStackParamList,"Rebanho">;