import React from "react";
import Realm from "realm";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_HEIGHT } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { Vaca } from "../../realm/Vaca";
import EditarAnimal from "./EditarAnimal";
import AddAnimal from "./AddAnimal";
import VacaItem from "../../components/VacaItem";
import { Message } from "../../components";
import { useQuery } from "@realm/react";

const Rebanho = ( {route,navigation}:RebanhoProps ):JSX.Element => {

    const Vacas = useQuery<Vaca>("Vaca").sorted("name");

    let message = Vacas[0] ? false : true;

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
                    <Message title="Sem Registros Ainda" msg="Adicione algumas vacas e elas apareceram aqui." visible={message}/>
                </ScrollView>
            </View>
            <View style={[{height:TOTAL_HEIGHT*0.05},StylesColors.background.primary]}></View>
        </View>
    );
}

export {Rebanho, EditarAnimal, AddAnimal};

type RebanhoProps = NativeStackScreenProps<RootStackParamList,"Rebanho">;