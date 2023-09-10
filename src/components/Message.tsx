import { Text, View } from "react-native";
import { Containers, StylesColors, Typography } from "../assets";

const Message = ( {title,msg,visible}:NoDataProps ):JSX.Element => {

    if(!visible) {
        return(<></>);
    }

    return (
        <View style={[Containers.section,StylesColors.background.secondary]}>
            <Text style={[Typography.h2,StylesColors.font.secondary,Containers.marginBottom]}>{title}</Text>
            <Text style={[Typography.p,StylesColors.font.default]}>{msg}</Text>
        </View>
    );
}

type NoDataProps = {
    title:string,
    msg:string,
    visible:boolean
}
export default Message;