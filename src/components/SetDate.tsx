import React from "react";
import { Pressable, Text, View } from "react-native";
import { Containers, FONT_SIZE, StylesColors, Typography } from "../assets";
import DatePicker from "react-native-date-picker";
import { useState } from "react";

const  SetDate = (props:SetDateProps):JSX.Element => {

    const [openDate,setOpenDate] = useState(false),
        [date, setDate] = useState(props.date),
        marginBottom = props.marginBottom ? props.marginBottom : 0;
        

    return (
        <View style={[Containers.flexRow,Containers.commonWidth,Containers.spaceBetween,{marginBottom:FONT_SIZE * marginBottom}]}>
            <View style={[
                    Containers.mediumButton,
                    StylesColors.background.secondary]}>
                <Text style={[
                    StylesColors.font.secondary,
                    Typography.h3,
                    {textAlign:"center"}
                ]}>{props.item} {date ? date.toLocaleDateString() : "Sem Registro"}</Text>
            </View>
            <Pressable style={[Containers.exSmallButton,StylesColors.background.primary]}
                onPress={ () => setOpenDate(true)}
            >
                <Text style={[
                    Typography.h2,
                    StylesColors.font.primary,
                    {textAlign:"center"}
                ]}>+</Text>
            </Pressable>
            <DatePicker 
                modal
                open = {openDate}
                mode = "date"
                date = {props.date ? props.date : new Date()}
                confirmText = "Confirmar"
                cancelText = "Cancelar"
                title = {props.title}
                onConfirm = { (newDate) => {
                    props.onConfirm(newDate) ;
                    setOpenDate(false);
                    setDate(newDate);
                }}
                onCancel = { () => setOpenDate(false)}
                maximumDate = {new Date()}
            />
        </View>

    );
}

export default SetDate;

interface SetDateProps {
    date : Date | undefined;
    item : string;
    title : string;
    marginBottom ?: number;
    onConfirm : (newDate:Date) => void ;
}