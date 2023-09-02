import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { AppColors, Containers, Styles, StylesColors, Typography } from "../../assets";
import { FONT_SIZE } from "../../assets/Sizes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootSackParamList } from "../../../App";

const AddProducao = ( {navigation}:AddProducaoProps ):JSX.Element => {
    return (
        <View style={Styles.defaultBody}>
            <View style={Containers.main}>
                <View style={{marginBottom:FONT_SIZE*2}}>
                    <Text style={[
                        Typography.label,
                        StylesColors.font.secondary
                        ]}>Quantidade Coletada</Text>
                    <TextInput
                        style={[
                            Containers.input,
                            StylesColors.background.secondary,
                            StylesColors.font.secondary,
                            Typography.h2,
                            {textAlign:"center",width:"100%"}
                        ]}
                        keyboardType="number-pad"
                        maxLength={4}
                        placeholder="Volume em litros"
                        placeholderTextColor={AppColors.font.default}
                    />
                </View>
                <View style={{marginBottom:FONT_SIZE}}>
                    <Text style={[
                        Typography.label,
                        StylesColors.font.secondary
                        ]}>Data do inicio da coleta</Text>
                    <View style={[
                        Containers.spaceBetween,
                        Containers.flexRow,
                        {marginBottom:FONT_SIZE}
                        ]}>
                        <TextInput
                            style={[
                                Containers.input,
                                StylesColors.background.secondary,
                                StylesColors.font.secondary,
                                Typography.h2,
                                {textAlign:"center",width:"50%"}
                            ]}
                            keyboardType="number-pad"
                            maxLength={4}
                            placeholder="yyyy"
                            placeholderTextColor={AppColors.font.default}
                        />
                        <TextInput
                            style={[
                                Containers.input,
                                StylesColors.background.secondary,
                                StylesColors.font.secondary,
                                Typography.h2,
                                {textAlign:"center",width:"20%"}
                            ]}
                            keyboardType="number-pad"
                            maxLength={2}
                            placeholder="mm"
                            placeholderTextColor={AppColors.font.default}
                        />
                        <TextInput
                            style={[
                                Containers.input,
                                StylesColors.background.secondary,
                                StylesColors.font.secondary,
                                Typography.h2,
                                {textAlign:"center",width:"20%"}
                            ]}
                            keyboardType="number-pad"
                            maxLength={2}
                            placeholder="dd"
                            placeholderTextColor={AppColors.font.default}
                        />
                    </View>
                </View>
                <View style={{marginBottom:FONT_SIZE*2}}>
                    <Text style={[
                        Typography.label,
                        StylesColors.font.secondary,
                        ]}>Data do fim da coleta</Text>
                    <View style={[Containers.spaceBetween,Containers.flexRow]}>
                        <TextInput
                            style={[
                                Containers.input,
                                StylesColors.background.secondary,
                                StylesColors.font.secondary,
                                Typography.h2,
                                {textAlign:"center",width:"50%"}
                            ]}
                            keyboardType="number-pad"
                            maxLength={4}
                            placeholder="yyyy"
                            placeholderTextColor={AppColors.font.default}
                        />
                        <TextInput
                            style={[
                                Containers.input,
                                StylesColors.background.secondary,
                                StylesColors.font.secondary,
                                Typography.h2,
                                {textAlign:"center",width:"20%"}
                            ]}
                            keyboardType="number-pad"
                            maxLength={2}
                            placeholder="mm"
                            placeholderTextColor={AppColors.font.default}
                        />
                        <TextInput
                            style={[
                                Containers.input,
                                StylesColors.background.secondary,
                                StylesColors.font.secondary,
                                Typography.h2,
                                {textAlign:"center",width:"20%"}
                            ]}
                            keyboardType="number-pad"
                            maxLength={2}
                            placeholder="dd"
                            placeholderTextColor={AppColors.font.default}
                        />
                    </View>
                </View>
                <Pressable 
                    style={Styles.primaryButton}
                    onPress={ () => navigation.navigate("Producao")}
                >
                    <Text style={Styles.primaryH1}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default AddProducao;

type AddProducaoProps = NativeStackScreenProps<RootSackParamList,"AddProducao">