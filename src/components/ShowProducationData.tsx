import { Text, View } from "react-native";
import { ProductionData } from "./ProductionData"
import { Containers, StylesColors, Typography } from "../assets";

const ShowProductionData:React.FC<ShowProductionDataProps> = (props) => {

    props.minDate = typeof props.minDate === "number" ? new Date() : props.minDate;

    props.maxDate = typeof props.maxDate === "number" ? new Date() : props.maxDate;


    if ( ! props.visible) {
        return(
            <></>
        );
    }

    const productionData = new ProductionData({
        minDate:props.minDate,
        maxDate:props.maxDate,
        numLotes:props.numLotes,
        totalNumVacas:props.totalNumVacas,
        volumeTotal:props.volumeTotal,
    });

    const [BgColor,TxtColor] = productionData.isOkay ? [StylesColors.background.secondary,StylesColors.font.secondary] :
    [StylesColors.background.danger,StylesColors.font.danger];
    
    return(
        <View style={[Containers.section,BgColor]}>
            <Text style={[Typography.h1,TxtColor]}>L por Vaca : { Math.round( productionData.perVaca ) }L</Text>
            <Text style={[Typography.h1,TxtColor]}>L por Dia : { Math.round( productionData.perDay ) }L</Text>
            <Text style={[Typography.h1,TxtColor]}>Total : { Math.round( productionData.total ) }L</Text>
        </View>
    );
    
}

export default ShowProductionData;

interface ShowProductionDataProps {
    visible:boolean,
    minDate:Date | number,
    maxDate:Date | number,
    numLotes:number,
    volumeTotal:number,
    totalNumVacas:number,
}