import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { AppColors, Containers, Styles, StylesColors, Typography } from "../../assets";
import { FONT_SIZE } from "../../assets/Sizes";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootSackParamList } from "../../../App";

const AddAnimal = ( {navigation}:AddAnimalProps ):JSX.Element => {
    return (
        <View style={Styles.defaultBody}>
            <View style={Containers.main}>
                <Text style={[Typography.label,StylesColors.font.secondary]}>Nome ou número</Text>
                <TextInput 
                    style={[
                        Styles.defaultButton,
                        Typography.h2,
                        {textAlign:"center"},
                        StylesColors.font.secondary
                    ]}
                    maxLength={10}
                    placeholder="mm"
                    placeholderTextColor={AppColors.font.default}
                />
                <View style={[Containers.spaceBetween,Containers.flexRow,{marginBottom:( FONT_SIZE )}]}>
                    <View style={{width:"45%"}}>
                        <Text style={[Typography.label,StylesColors.font.secondary]}>Mês</Text>
                        <TextInput 
                            style={[
                                Styles.defaultButton,
                                Typography.h2,
                                {textAlign:"center"},
                                StylesColors.font.secondary
                            ]}
                            keyboardType="number-pad"
                            maxLength={2}
                            placeholder="mm"
                            placeholderTextColor={AppColors.font.default}
                        />
                    </View>
                    <View style={{width:"45%"}}>
                        <Text style={[Typography.label,StylesColors.font.secondary]}>Ano</Text>
                        <TextInput 
                            style={[
                                Styles.defaultButton,
                                Typography.h2,
                                {textAlign:"center"},
                                StylesColors.font.secondary
                            ]}
                            keyboardType="number-pad"
                            maxLength={4}
                            placeholder="yyyy"
                            placeholderTextColor={AppColors.font.default}
                        />
                    </View>
                </View>
                <Pressable 
                    style={Styles.primaryButton}
                    onPress={ () => navigation.navigate("Rebanho") }
                >
                    <Text style={Styles.primaryH1}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default AddAnimal;

type AddAnimalProps = NativeStackScreenProps<RootSackParamList,"AddAnimal">;