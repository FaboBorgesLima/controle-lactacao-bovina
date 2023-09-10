import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../../App";
import { AppColors, Containers, FONT_SIZE, Styles, StylesColors, Typography } from "../../assets";
import { useQuery, useRealm } from "@realm/react";
import { Lote } from "../../realm";
import { SetDate } from "../../components";
import { UpdateMode } from "../../../node_modules/realm/";
import  Realm from "../../../node_modules/realm/";

const EditarProducao = ( {navigation,route}:EditarProducaoProps):JSX.Element => {

    const LOTE_UUID = new Realm.BSON.UUID(route.params.id);

    const thisLote = useRealm().objectForPrimaryKey<Lote>("Lote",LOTE_UUID),

        [start,setStart] = useState(thisLote?.start),

        [end,setEnd] = useState(thisLote?.end),

        [vol,setVol] = useState(thisLote?.vol),
        
        [numVacas,setNumVacas] = useState(thisLote?.numVacas),
        
        realm = useRealm();
        

    const modHandler = () => {
        
        realm.write( () => {
            realm.create(
                "Lote",
                {
                    _id:LOTE_UUID,
                    end:end,
                    start:start,
                    numVacas:numVacas,
                    vol:vol
                },
                UpdateMode.Modified
            )
        });

        navigation.goBack();
    }
    const  deleteLote = () => {
        
        realm.write( () => {
            realm.delete(realm.objectForPrimaryKey("Lote",LOTE_UUID))
        })
    }


    return (
        <View style={Styles.defaultBody}>
            <View style={[Containers.main]}>
                <View style={[Containers.section,StylesColors.background.secondary,{marginTop:FONT_SIZE}]}>
                    <TextInput 
                        style = {[
                            Containers.button,
                            StylesColors.background.secondary,
                            Typography.h2,
                            StylesColors.font.secondary,
                            Containers.marginBottom,
                            {textAlign:"center"}
                        ]}
                        onChangeText = { (newVolume) => setVol( Number(newVolume) )}
                        placeholderTextColor = {AppColors.font.default}
                        keyboardType = "decimal-pad"
                        value={vol?.toString()}
                        placeholder = "Volume em L"
                    />
                    <SetDate
                        date = {start}
                        item = "Inicio :"
                        marginBottom = {1}
                        maxDate = {end}
                        title = "Modificar inicio da coleta de leite"
                        onConfirm = { (newDate) => setStart(newDate) }
                    />
                    <SetDate
                        date = {end}
                        item = "Final :"
                        minDate = {start}
                        marginBottom = {1}
                        title = "Modificar final da coleta de leite"
                        onConfirm = { (newDate) => setEnd(newDate) }
                    />
                    <Pressable style={[Containers.button,StylesColors.background.danger]}
                        onPress={ () => {
                            Alert.alert(
                                "Deseja mesmo deletar?",
                                "O registro deste lote será apagado para sempre, deseja continuar?",
                                [{
                                    text:"Sim",
                                    onPress: () => {

                                        deleteLote();

                                        navigation.goBack();
                                
                                    },
                                    style:"cancel"
                                } , {
                                    text:"Não",
                                    style:"default"
                                }]
                            )
                        }}
                    >
                        <Text style={[Typography.h1,StylesColors.font.danger]}>Deletar</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[Containers.footer,StylesColors.background.primary]}>
                <Pressable style={[Containers.button,StylesColors.background.secondary]}
                    onPress={ () => modHandler()}
                >
                    <Text style={Styles.secondaryH1}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default EditarProducao;

type EditarProducaoProps = NativeStackScreenProps<RootStackParamList,"EditarProducao">;