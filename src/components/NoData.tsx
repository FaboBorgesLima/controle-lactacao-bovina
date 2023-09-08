import { Text, View } from "react-native";
import { Containers, StylesColors, Typography } from "../assets";

const NoData = ( {title,msg}:NoDataProps ):JSX.Element => {
    return (
        <View style={[Containers.section,StylesColors.background.secondary]}>
            <Text style={[Typography.h2,StylesColors.font.secondary,Containers.marginBottom]}>{title}</Text>
            <Text style={[Typography.p,StylesColors.font.default]}>{msg}</Text>
        </View>
    );
}

type NoDataProps = {
    title:string,
    msg:string
}
export default NoData;