import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_HEIGHT, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootSackParamList, useRealmContext } from "../../../App";
import { Vaca } from "../../realm/Vaca";
import EditarAnimal from "./EditarAnimal";
import AddAnimal from "./AddAnimal";
import VacaItem from "../../components/VacaItem";

const Rebanho = ( {route,navigation}:RebanhoProps ):JSX.Element => {
    
    const VACAS = useRealmContext().useQuery<Vaca>("Vaca").sorted("name");

    return (
        <View style={Styles.defaultBody}>
            <View style = {[Containers.main,{height:TOTAL_HEIGHT * 0.95}]}>
                <ScrollView style = {{paddingTop:FONT_SIZE}}>
                    <Pressable
                        style={Styles.primaryButton}
                        onPress={ () => navigation.navigate("AddAnimal") }
                    >
                        <Text style={Styles.primaryH1}>+ Animal</Text>
                    </Pressable>
                    <Pressable 
                        style={Styles.primaryButton}
                        onPress={ () => navigation.navigate("AddProducao") }
                    >
                        <Text style={Styles.primaryH1}>+ Produção</Text>
                    </Pressable>
                    
                    {VACAS.map( ( { name, born} ) => {
                        return (
                            <VacaItem name={name} born={born}/>
                        )
                    })}
                    <View style={{height:FONT_SIZE}}></View>
                </ScrollView>
            </View>
            <View style={[{height:TOTAL_HEIGHT*0.5},StylesColors.background.primary]}></View>
        </View>
    );
}

export {Rebanho, EditarAnimal, AddAnimal};

type RebanhoProps = NativeStackScreenProps<RootSackParamList,"Rebanho">;