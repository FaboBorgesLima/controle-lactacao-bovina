import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, Styles } from "../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootSackParamList } from "../../App";

const Home = ( {route,navigation}:HomeProps ):JSX.Element => {

    return (
        <ScrollView style={Styles.defaultBody}>
            <View style={Containers.main}>
                <Pressable 
                    style={Styles.primaryButton}
                    onPress={ () => navigation.navigate("Rebanho") }
                >
                    <Text style={Styles.primaryH1}>Rebanho</Text>
                </Pressable>
                <Pressable 
                    style={Styles.primaryButton}
                    onPress={ () => navigation.navigate("Producao") }
                >
                    <Text style={Styles.primaryH1}>Produção</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default Home;

type HomeProps = NativeStackScreenProps<RootSackParamList,"Home">