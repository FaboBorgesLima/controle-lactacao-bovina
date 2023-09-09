import React, { useState } from "react";
import { BSON } from "realm";
import { Pressable, Text, TextInput, View } from "react-native";
import { AppColors, Containers, FONT_SIZE, Styles, StylesColors, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { SetDate } from "../../components";
import Realm from "realm";
import { useRealm } from "@realm/react";

const AddProducao = ( {navigation}:AddProducaoProps ):JSX.Element => {

    type dateUndefined = Date | undefined;

    const realm = useRealm(), 
        [start,setStart] = useState<dateUndefined>(undefined),
        [end,setEnd] = useState<dateUndefined>(undefined),
        [volume,setVolume] = useState(0),
        numVacas = realm.objects("Vaca").length;
    
    let vacaColor = numVacas === 0 ? StylesColors.background.danger : StylesColors.background.primary ;

    const createLote = (
        props:{
            vol?:number ,
            start?:Date,
            end?:Date,
            numVacas?:number,
        }
    ) => {

        if (
            props.vol === undefined ||
            props.start === undefined  ||
            props.end === undefined  ||
            props.numVacas === undefined
            ) {
            return;
        }


        if ( props.start.getTime() < props.end.getTime() ) {

            realm.write( () => {
                realm.create(
                    "Lote",
                    {
                        _id: new BSON.UUID(),
                        vol:props.vol,
                        numVacas:props.numVacas,
                        start:props.start,
                        end:props.end
                    }
                    )
            });

            navigation.navigate("Producao");
        }
        
    }

    return (
        <View style = {Styles.defaultBody}>
            <View style = {Containers.main}>
                <View style = {[
                    Containers.section,
                    StylesColors.background.secondary,
                    {marginTop:FONT_SIZE}]}>
                    <Text style = {[
                        Typography.h1,
                        StylesColors.font.secondary,
                        Containers.marginBottom
                    ]}>Coleta de Leite</Text>
                    <TextInput 
                        style = {[
                            Containers.button,
                            StylesColors.background.secondary,
                            Typography.h2,
                            StylesColors.font.secondary,
                            Containers.marginBottom,
                            {textAlign:"center"}
                        ]}
                        onChangeText = { (newVolume) => setVolume( Number(newVolume) )}
                        placeholderTextColor = {AppColors.font.default}
                        keyboardType = "decimal-pad"
                        placeholder = "Volume em L"
                    />
                    <SetDate
                        date = {start}
                        item = "Inicio :"
                        marginBottom = {1}
                        maxDate = {end}
                        title = "Definir inicio da coleta de leite"
                        onConfirm = { (newDate) => setStart(newDate) }
                    />
                    <SetDate
                        date = {end}
                        item = "Final :"
                        minDate = {start}
                        marginBottom = {1}
                        title = "Definir final da coleta de leite"
                        onConfirm = { (newDate) => setEnd(newDate) }
                    />
                    <View style = {[Containers.commonWidth,Containers.flexRow,Containers.spaceBetween]}>
                        <View style = {[Containers.mediumButton,StylesColors.background.secondary]}>
                            <Text style={Styles.secondaryH1}>Vacas</Text>
                        </View>
                        <View style = {[Containers.exSmallButton,vacaColor]}>
                            <Text style={Styles.primaryH1}>{numVacas}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[
                Containers.footer,
                StylesColors.background.primary]}>
                <Pressable style = {[Containers.button,StylesColors.background.secondary]}
                    onPress = { () => createLote({
                        vol:volume,
                        numVacas:numVacas,
                        start:start,
                        end:end,
                    })}
                >
                    <Text style = {Styles.secondaryH1}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default AddProducao;

type AddProducaoProps = NativeStackScreenProps<RootStackParamList,"AddProducao">