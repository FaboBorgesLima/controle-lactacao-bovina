import { Pressable, Text, View } from "react-native"
import { Containers, FONT_SIZE, StylesColors, Typography } from "../assets"

const LoteItem = (props:LoteItemProps):JSX.Element => {

    return (
        <Pressable
            style={[Containers.section,StylesColors.background.secondary]}
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
    start:Date,
    end:Date,
    numVacas:number,
    vol:number,
}