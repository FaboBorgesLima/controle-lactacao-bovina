import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { AppColors, Containers, FONT_SIZE, Styles, StylesColors, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList} from "../../../App";
import DatePicker from "react-native-date-picker";
import { Warning } from "../../components";
import { Vaca } from "../../realm/Vaca";
import Realm from "realm";
import { useRealm } from "@realm/react";

const AddAnimal = ( {navigation}:AddAnimalProps ):JSX.Element => {

    const realm = useRealm(),

        [name,setName] = useState(""),

        [datePickerOpen,setDatePickerOpen] = useState(false),

        [date,setDate] = useState( new Date() ),

        [warningVisible,setWarningVisible] = useState(false),

        [warningMensage,setWarningMensage] = useState(""),

        [warningTitle,setWarningTitle] = useState("");
    

    const createAnimal = (name:string,bornDate:Date):void=> {

        const exists = realm.objectForPrimaryKey("Vaca",name);
        
        if ( ( name !== "" ) && ( exists === null ) ) {

            realm.write( () => {
                realm.create<Vaca>('Vaca', {
                    name:name,
                    born:bornDate,
                })
            })

            setWarningVisible(false);

            navigation.goBack();

        } else {

            setWarningVisible(true);

            setWarningTitle("Identificador já utilizado");

            setWarningMensage("'"+name + "' já foi registrado, registre outro animal ou mude o identificador!");
        }

    }

    const nameManager = (newName:string) => {

        setName(newName.replace(/[^A-Z0-9]/ig,""));

        setWarningVisible(false);
    }

    return (
        <SafeAreaView>
            <View style={Styles.defaultBody}>
                <ScrollView contentContainerStyle={Containers.scrollView} scrollToOverflowEnabled={true}>
                    <View style={Containers.main}>
                        <View style = {[Containers.section,StylesColors.background.secondary,{marginTop:FONT_SIZE
                        }]}>

                            <View style ={Containers.marginBottom}>
                                <Text style={[Typography.label,StylesColors.font.secondary]}>Identificação</Text>
                                <TextInput 
                                    style={[
                                        Containers.mediumButton,
                                        Containers.marginBottom,
                                        StylesColors.background.secondary,
                                        Typography.h2,
                                        {textAlign:"center"},
                                        StylesColors.font.secondary
                                    ]}
                                    onChangeText={(newName) => nameManager(newName)}
                                    maxLength={10}
                                    value={name}
                                    placeholder="Identificação"
                                    placeholderTextColor={AppColors.font.default}
                                />
                            </View>
                            
                            <View>
                                <Text style={[Typography.label,StylesColors.font.secondary]}>Data de Nascimento</Text>
                                <Pressable 
                                    style={[
                                        Containers.mediumButton,
                                        StylesColors.background.secondary,
                                        {marginBottom:FONT_SIZE*2}]}
                                    onPress={ () => setDatePickerOpen(true) }    
                                >
                                    <Text style={Styles.secondaryH1}>{date.toLocaleDateString()}</Text>
                                </Pressable>
                                <Pressable style={[
                                        Containers.mediumButton,
                                        StylesColors.background.primary
                                    ]}
                                    onPress={ () => setDatePickerOpen(true)}
                                >
                                    <Text style={[
                                        Typography.h2,
                                        StylesColors.font.primary,
                                        {textAlign:"center"}
                                    ]}>Modificar Data</Text>
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

                            </View>
                        </View>

                        <Warning msg={warningMensage} title={warningTitle} visible={warningVisible}/>

                    </View>
                </ScrollView>
                <View style={[Containers.footer,StylesColors.background.primary]}>
                        <Pressable 
                            style={Styles.secondaryButton}
                            onPress={ () => createAnimal(name,date) }
                        >
                            <Text style={[Styles.secondaryH1]}>Confirmar</Text>
                        </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default AddAnimal;

type AddAnimalProps = NativeStackScreenProps<RootStackParamList,"AddAnimal">;