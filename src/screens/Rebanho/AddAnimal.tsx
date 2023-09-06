import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { AppColors, Containers, FONT_SIZE, Styles, StylesColors, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootSackParamList, useRealmContext } from "../../../App";
import DatePicker from "react-native-date-picker";
import { Vaca } from "../../realm/Vaca";
import { Warning } from "../../components";

const AddAnimal = ( {navigation}:AddAnimalProps ):JSX.Element => {

    const [name,setName] = useState(""),

        [datePickerOpen,setDatePickerOpen] = useState(false),

        [date,setDate] = useState( new Date() ),

        RealmContext = useRealmContext,

        [warningVisible,setWarningVisible] = useState(false),

        [warningMensage,setWarningMensage] = useState(""),

        [warningTitle,setWarningTitle] = useState(""),

        realm = RealmContext().useRealm();
    

    const createAnimal = (name:string,bornDate:Date):void=> {

        const exists = realm.objectForPrimaryKey("Vaca",name);
        
        if ( ( name !== "" ) && ( exists === null ) ) {

            realm.write( () => {
                realm.create('Vaca', {
                    name:name,
                    born:bornDate
                })
            })

            setWarningVisible(false);

            navigation.navigate("Rebanho");

        } else {

            setWarningVisible(true);

            setWarningTitle("Nome já utilizado");

            setWarningMensage("'"+name + "' já foi registrado, registre outro animal ou mude o nome !");
        }
    }

    const nameManager = (newName:string) => {

        setName(newName.replace(/[^A-Z0-9]/ig,""));

        setWarningVisible(false);
    }

    return (
        <ScrollView style={Styles.defaultBody}>
            <View style={Containers.main}>
                <Text style={[Typography.label,StylesColors.font.secondary,{marginTop:FONT_SIZE}]}>Nome ou número</Text>
                <TextInput 
                    style={[
                        Styles.defaultButton,
                        Typography.h2,
                        {textAlign:"center"},
                        StylesColors.font.secondary
                    ]}
                    onChangeText={(newName) => nameManager(newName)}
                    maxLength={10}
                    value={name}
                    placeholder="Nome ou número"
                    placeholderTextColor={AppColors.font.default}
                />
                <Text style={[Typography.label,StylesColors.font.secondary]}>Data de nascimento</Text>
                <Pressable 
                    style={Styles.defaultButton}
                    onPress={ () => setDatePickerOpen(true) }    
                >
                    <Text style={Styles.secondaryH1}>{date.toLocaleDateString()}</Text>
                </Pressable>
                <Pressable style={Styles.primaryButton}
                    onPress={ () => setDatePickerOpen(true)}
                >
                    <Text style={[
                        Typography.h2,
                        StylesColors.font.primary,
                        {textAlign:"center"}
                    ]}>Modificar data</Text>
                </Pressable>
                <DatePicker 
                    modal
                    mode = "date"
                    maximumDate={new Date()}
                    minimumDate={new Date("2000-01-01") }
                    open = {datePickerOpen}
                    date = {date}
                    confirmText="Confirmar"
                    cancelText="Cancelar"
                    title={"Definir data de nascimento"}
                    onConfirm = { (newDate) => {
                        setDate(newDate);
                        setDatePickerOpen(false);
                    }}
                    onCancel = { () => setDatePickerOpen(false) }
                    />
                <Warning msg={warningMensage} title={warningTitle} visible={warningVisible}/>
            </View>
            <View style={[Containers.footer,StylesColors.background.primary]}>
                <Pressable 
                    style={Styles.secondaryButton}
                    onPress={ () => createAnimal(name,date) }
                >
                    <Text style={[Styles.secondaryH1]}>Confirmar</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default AddAnimal;

type AddAnimalProps = NativeStackScreenProps<RootSackParamList,"AddAnimal">;