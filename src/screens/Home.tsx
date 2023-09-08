import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles } from "../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

const Home = ( {route,navigation}:HomeProps ):JSX.Element => {

    return (
        <ScrollView style={Styles.defaultBody}>
            <View style={[Containers.main,{paddingTop:FONT_SIZE}]}>
                <Pressable 
                    style={[Styles.primaryButton,Containers.marginBottom]}
                    onPress={ () => navigation.navigate("Rebanho") }
                >
                    <Text style={Styles.primaryH1}>Rebanho</Text>
                </Pressable>
                <Pressable 
                    style={[Styles.primaryButton,Containers.marginBottom]}
                    onPress={ () => navigation.navigate("Producao") }
                >
                    <Text style={Styles.primaryH1}>Produção</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default Home;

type HomeProps = NativeStackScreenProps<RootStackParamList,"Home">