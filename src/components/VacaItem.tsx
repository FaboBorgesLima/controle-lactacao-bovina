import { Pressable, Text } from "react-native";
import { Containers, StylesColors, Typography } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { Vaca } from "../realm";

const VacaItem = ( {vaca}:VacaItemProps ): JSX.Element => {

    const Vaca = vaca;

    const navigation = useNavigation();

    const ACTUAL_DATE = new Date();

    const DIFF_MONTHS = Math.trunc( ( ACTUAL_DATE.getTime() - Vaca.born.getTime() ) / 2592000000 );

    return (
        <Pressable 
            style={[Containers.section,StylesColors.background.secondary]}
            onPress={ () => navigation.navigate("EditarAnimal",{name:Vaca.name}) }
        >
            <Text style={[Typography.h2,StylesColors.font.secondary]}>Nome : {Vaca.name} </Text>
            <Text style={[Typography.p,StylesColors.font.default]}>Idade : {DIFF_MONTHS} meses.</Text>
        </Pressable>
    );
}

type VacaItemProps = {vaca:Vaca};

export default VacaItem;