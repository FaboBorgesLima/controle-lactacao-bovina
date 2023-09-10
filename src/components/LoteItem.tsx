import { Pressable, Text, View } from "react-native";
import { Containers, FONT_SIZE, StylesColors, Typography } from "../assets";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoteItem:React.FC<LoteItemProps> = (props) => {

    const navigation = useNavigation();

    return (
        <Pressable
            style = {[Containers.section,StylesColors.background.secondary]}
            onPress = { () => navigation.navigate("EditarProducao",{id:props.uuid})}
        >
            <View style={[Containers.commonWidth,Containers.flexRow,Containers.spaceBetween,{marginBottom:FONT_SIZE }]}>
                <Text style={[Typography.h2,StylesColors.font.secondary]}>{props.start.toLocaleDateString()}</Text>
                <Text style={[Typography.h2,StylesColors.font.secondary]}>{props.end.toLocaleDateString()}</Text>
            </View>
            <View style={[Containers.commonWidth,Containers.flexRow,Containers.spaceBetween]}>
                <Text style={[Typography.h3,StylesColors.font.default]}>{props.vol} L</Text>
                <Text style={[Typography.h3,StylesColors.font.default]}>{props.numVacas} Vacas</Text>
            </View>
        </Pressable>
    )
}
export default LoteItem;

interface LoteItemProps {
    uuid: string
    start:Date,
    end:Date,
    numVacas:number,
    vol:number,
}