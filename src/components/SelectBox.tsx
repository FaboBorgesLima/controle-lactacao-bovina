import { GestureResponderEvent, Pressable, Text, View } from "react-native"
import { Containers, FONT_SIZE, StylesColors, Typography } from "../assets"

const SelectBoxBool = ( { open, trueResponse, falseResponse, onSelectTrue, onSelectFalse, value}:SelectBoxBoolProps):JSX.Element => {

    const TRUE_RESPONSE = trueResponse ? trueResponse : "Yes",
        FALSE_RESPONSE = falseResponse ? falseResponse : "No",
        isTrue = value;

    let bgColorTrue = isTrue ? StylesColors.background.danger : StylesColors.background.default,
        bgColorFalse = isTrue ? StylesColors.background.default : StylesColors.background.primary,
        textColorTrue = isTrue ? StylesColors.font.danger : StylesColors.font.default,
        textColorFalse = isTrue ? StylesColors.font.default : StylesColors.font.primary;

    if (open) {
        return (
            <View style={[Containers.flexRow,{justifyContent:"center"}]}>
                <Pressable onPress={ onSelectTrue } style={[bgColorTrue,Containers.exSmallButton,{marginRight:FONT_SIZE*0.25}]}>
                    <Text style={[Typography.h3,textColorTrue,{textAlign:"center"}]}>{TRUE_RESPONSE}</Text>
                </Pressable>
                <Pressable onPress={ onSelectFalse} style={[bgColorFalse,Containers.exSmallButton]}>
                    <Text style={[Typography.h3,textColorFalse,{textAlign:"center"}]}>{FALSE_RESPONSE}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <></>
    );
}

type SelectBoxBoolProps = {
    value:boolean,
    open:boolean,
    trueResponse?:string,
    falseResponse?:string,
    onSelectTrue: (event:GestureResponderEvent)=> void,
    onSelectFalse: (event:GestureResponderEvent)=> void,
}

export {SelectBoxBool}