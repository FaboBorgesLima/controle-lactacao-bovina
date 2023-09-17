import React, { useState } from "react";
import { BSON } from "realm";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { AppColors, Containers, FONT_SIZE, Styles, StylesColors, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { SetDate, Warning } from "../../components";
import Realm from "realm";
import { useQuery, useRealm } from "@realm/react";
import { Lote } from "../../realm";

const AddProducao = ( {navigation}:AddProducaoProps ):JSX.Element => {

    type dateUndefined = Date | undefined;

    const realm = useRealm(),
        Lotes = useQuery<Lote>("Lote"),
        [start,setStart] = useState<dateUndefined>(undefined),
        [end,setEnd] = useState<dateUndefined>(undefined),
        [volume,setVolume] = useState(0),
        [warning,setWarning] = useState(false),
        numVacas = realm.objects("Vaca").length;
    
    let vacaColor = numVacas === 0 ? StylesColors.background.danger : StylesColors.background.primary ;

    const createLote = (
        props:{
            vol?:number ,
            start?:Date,
            end?:Date,
            numVacas?:number,
        }
    ):boolean => {

        if (
            props.vol === undefined ||
            props.start === undefined  ||
            props.end === undefined  ||
            props.numVacas === undefined ||
            props.numVacas <= 0
            ) {

            return false;
        }

        const stackLote = Lotes.filtered("(start < $0 AND end > $0) OR"+
        "(start < $1 AND end > $1) OR"+
        "(start >= $0 AND end =< $1)",props.start,props.end)[0];


        if ( 
            ( props.start.getTime() < props.end.getTime() ) &&
            !stackLote
            ) {

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

            return true;
        }

        return false;
    }

    return (
        <View style = {Styles.defaultBody}>
            <ScrollView contentContainerStyle={Containers.scrollView}>
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
                            onConfirm = { (newDate) => {

                                newDate.setHours(0,0,0,0);

                                setStart(newDate);
                            } }
                        />
                        <SetDate
                            date = {end}
                            item = "Final :"
                            minDate = {start}
                            marginBottom = {1}
                            title = "Definir final da coleta de leite"
                            onConfirm = { (newDate) => { 

                                newDate.setHours(0,0,0,0);
                                
                                setEnd(newDate);
                            } }
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
                    <Warning
                        visible = {warning}
                        title = "Algo está incorreto"
                        msg = "Algum campo está incompleto, incorreto ou já existe um registro na data."
                    />
                </View>
            </ScrollView>

            <View style={[
                Containers.footer,
                StylesColors.background.primary]}>
                <Pressable style = {[Containers.button,StylesColors.background.secondary]}
                    onPress = { () => {

                        if ( createLote({
                                vol:volume,
                                numVacas:numVacas,
                                start:start,
                                end:end,
                            }) 
                        ) {

                            setWarning(false);

                            navigation.goBack();

                        } else {

                            setWarning(true);
                        }
                    } 
                }
                >
                    <Text style = {Styles.secondaryH1}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default AddProducao;

type AddProducaoProps = NativeStackScreenProps<RootStackParamList,"AddProducao">