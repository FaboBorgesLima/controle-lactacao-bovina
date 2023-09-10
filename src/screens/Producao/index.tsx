import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_HEIGHT } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import AddProducao from "./AddProducao";
import EditarProducao from "./EditarProducao";
import { useQuery } from "@realm/react";
import { Lote } from "../../realm";
import { LoteItem, Message } from "../../components";

const Producao = ( {navigation,route}:ProducaoProps ):JSX.Element => {

    const Lotes = useQuery<Lote>("Lote").sorted("start", true);

    let message = Lotes[0] ? false : true;

    return (
        <View style={Styles.defaultBody}>
            <View style={[Containers.main,{height:TOTAL_HEIGHT*0.95}]}>
                <ScrollView contentContainerStyle={Containers.scrollView}>
                    <Pressable
                        style={[Styles.primaryButton,Containers.marginBottom,{marginTop:FONT_SIZE}]}
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
                    {Lotes.map( (Lote) => (
                        <LoteItem
                            key={Lote._id.toString()}
                            uuid={Lote._id.toString()}
                            start={Lote.start}
                            end={Lote.end}
                            numVacas={Lote.numVacas}
                            vol={Lote.vol}
                        />
                    ))}
                    <Message 
                        title="Sem Registros Ainda"
                        msg="Adicione alguns lotes e eles apareceram aqui."
                        visible={message}
                    />
                </ScrollView>
            </View>
            <View style={[Containers.footer,StylesColors.background.primary,{height:TOTAL_HEIGHT*0.05}]} />
        </View>
    );
}

export { Producao, AddProducao, EditarProducao};

type ProducaoProps = NativeStackScreenProps<RootStackParamList,"Producao">