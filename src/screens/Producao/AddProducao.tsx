import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { AppColors, Containers, FONT_SIZE, Styles, StylesColors, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import DatePicker from "react-native-date-picker";

const AddProducao = ( {navigation}:AddProducaoProps ):JSX.Element => {

    const [startDate,setStartDate] = useState(new Date),
        [endDate,setEndDate] = useState(new Date),
        [openStartDate,setOpenStartDate] = useState(false),
        [openEndDate,setOpenEndDate] = useState(false),
        [volume,setVolume] = useState(0);
    

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
                        onChangeText={ ( newVolume ) => setVolume( parseFloat(newVolume) ) }
                        maxLength={7}
                        placeholder="Volume em litros"
                        placeholderTextColor={AppColors.font.default}
                    />
                </View>
                <View style={{marginBottom:FONT_SIZE}}>
                    <Text style={[
                        Typography.label,
                        StylesColors.font.secondary
                        ]}>Data do Inicio da Coleta</Text>
                    <Pressable 
                        style={Styles.secondaryButton}
                        onPress={ () => setOpenStartDate(true) }
                    >
                        <Text style={[StylesColors.font.secondary,Typography.h2,{textAlign:"center"}]}>{startDate.toLocaleDateString()}</Text>
                    </Pressable>
                    <Pressable style={Styles.primaryButton}
                    onPress={ () => setOpenStartDate(true)}>
                        <Text style={Styles.primaryH1}>Modificar Inicio</Text>
                    </Pressable>
                    <DatePicker 
                    modal
                    mode = "date"
                    maximumDate={new Date()}
                    minimumDate={new Date("2000-01-01") }
                    open = {openStartDate}
                    date = {startDate}
                    confirmText="Confirmar"
                    cancelText="Cancelar"
                    title={"Definir data de nascimento"}
                    onConfirm = { (newStartDate) => {
                        setStartDate(newStartDate)
                        setOpenStartDate(false)
                    }}
                    onCancel = { () => setOpenStartDate(false) }
                    />
                </View>
                <View style={{marginBottom:FONT_SIZE*2}}>
                    <Text style={[
                        Typography.label,
                        StylesColors.font.secondary,
                        ]}>Data do Fim da Coleta </Text>
                    <Pressable 
                        style={Styles.secondaryButton}
                        onPress={ () => setOpenEndDate(true) }
                    >
                        <Text style={[StylesColors.font.secondary,Typography.h2,{textAlign:"center"}]}>{endDate.toLocaleDateString()}</Text>
                    </Pressable>
                    <Pressable style={Styles.primaryButton}
                    onPress={ () => setOpenEndDate(true)}>
                        <Text style={Styles.primaryH1}>Modificar Final</Text>
                    </Pressable>
                    <DatePicker 
                    modal
                    mode = "date"
                    maximumDate={new Date()}
                    minimumDate={new Date("2000-01-01") }
                    open = {openEndDate}
                    date = {endDate}
                    confirmText="Confirmar"
                    cancelText="Cancelar"
                    title={"Definir data de nascimento"}
                    onConfirm = { (newEndDate) => {
                        setEndDate(newEndDate);
                        setOpenEndDate(false);
                    }}
                    onCancel = { () => setOpenEndDate(false) }
                    />
                </View>
            </View>
            <View style={[Containers.footer,StylesColors.background.primary]}>
                <Pressable 
                    style={Styles.secondaryButton}
                    onPress={ () => navigation.navigate("Producao") }
                >
                    <Text style={[Styles.secondaryH1]}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default AddProducao;

type AddProducaoProps = NativeStackScreenProps<RootStackParamList,"AddProducao">