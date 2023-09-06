import { Text, View } from "react-native";
import { Containers, FONT_SIZE, StylesColors, Typography } from "../assets";

const Warning = ( { title, msg, visible}:WarningProps ) => {

    if (visible) {

        return (
            <View style={[StylesColors.background.danger,Containers.section]}>
                <Text style={[Typography.h1,StylesColors.font.danger,{marginBottom:FONT_SIZE}]}>{title}</Text>
                <Text style={[Typography.p,StylesColors.font.danger]}>{msg}</Text>
            </View>
        );
    }

    return (
        <View></View>
    );
}

type WarningProps = {
    title:string,
    msg:string,
    visible:boolean
}

export default Warning;