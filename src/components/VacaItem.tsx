import { Pressable, Text } from "react-native";
import { Containers, StylesColors, Typography } from "../assets";
import { useNavigation } from "@react-navigation/native";

const VacaItem = ( {name,born}:VacaItemProps ): JSX.Element => {

    const navigation = useNavigation();

    const ACTUAL_DATE = new Date();

    const DIFF_MONTHS = Math.trunc( ( ACTUAL_DATE.getTime() - born.getTime() ) / 2592000000 );

    return (
        <Pressable 
            style={[Containers.section,StylesColors.background.secondary]}
            onPress={ () => navigation.navigate("EditarAnimal",{name:name}) }
        >
            <Text style={[Typography.h2,StylesColors.font.secondary]}>Nome : {name} </Text>
            <Text style={[Typography.p,StylesColors.font.default]}>Idade : {DIFF_MONTHS} meses.</Text>
        </Pressable>
    );
}

type VacaItemProps = {
    name:string,
    born:Date,
}

export default VacaItem;