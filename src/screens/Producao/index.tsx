import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, Styles } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import AddProducao from "./AddProducao";
import EditarProducao from "./EditarProducao";

const Producao = ( {navigation,route}:ProducaoProps ):JSX.Element => {
    return (
        <ScrollView style={Styles.defaultBody}>
            <View style={Containers.main}>
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
            </View>
        </ScrollView>
    );
}

export { Producao, AddProducao, EditarProducao};

type ProducaoProps = NativeStackScreenProps<RootStackParamList,"Producao">