import React, { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { RootStackParamList, useRealmContext } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_WIDTH, Typography } from "../../assets";
import { Vaca } from "../../realm/Vaca";
import { SelectBoxBool, SetDate, Warning } from "../../components";
import { UpdateMode } from "../../../node_modules/realm/";

const EditarAnimal = ( {route,navigation}:EditarAnimalProps ):JSX.Element => {

    const RealmContext = useRealmContext,
        realm = RealmContext().useRealm(),
        thisVaca = realm.objectForPrimaryKey<Vaca>("Vaca",route.params.name),
        [mastite,setMastite] = useState(thisVaca?.mastite ? true : false ), // OK
        [monta,setMonta] = useState(thisVaca?.monta), // OK
        [pariu,setPariu] = useState(thisVaca?.pariu), // OK
        [raca,setRaca] = useState(thisVaca?.raca), //Later
        [nascimento,setNascimento] = useState(thisVaca?.born ? thisVaca.born : new Date()), //OK
        [modified,setModified] = useState(false);  
    
    const updateVaca = ( props:UpdateVacaProps ):void => {

        if ( props.modified ) {

            realm.write( () => {

                const mastite = props.mastite ? props.mastite : false ;
    
                if ( props.nascimento !== thisVaca?.born) {

                    const nascimento = new VacaUpdateClass(props.name);

                    nascimento.born = props.nascimento;

                    realm.create(
                        "Vaca", 
                        nascimento,
                        UpdateMode.Modified
                    );
                }
                if ( ( props.monta !== thisVaca?.monta ) &&
                    (props.monta !== undefined) ) {

                    const monta = new VacaUpdateClass(props.name);
                
                    monta.monta = props.monta;

                    realm.create(
                        "Vaca", 
                        monta,
                        UpdateMode.Modified
                    );
                }
                if ( ( props.pariu !== thisVaca?.pariu ) &&
                    (props.pariu !== undefined) ) {

                    const pariu = new VacaUpdateClass(props.name);
                
                    pariu.pariu= props.pariu;

                    realm.create(
                        "Vaca", 
                        pariu,
                        UpdateMode.Modified
                    );
                }
                realm.create(
                    "Vaca", 
                    {
                        name:props.name,
                        mastite:mastite
                    },
                    UpdateMode.Modified
                );

            });
        }
        navigation.navigate("Rebanho");
    }

    const deleteVaca = ( name:string ):void => {

        realm.write( () => {
            realm.delete(
                realm.objectForPrimaryKey("Vaca",name)
            );
        });
        navigation.navigate("Rebanho");
    }

    return (
        <View style={Styles.defaultBody}>
            <View style={Containers.main}>
                <View style={[
                    Containers.section,
                    StylesColors.background.secondary,
                    {marginTop:FONT_SIZE}
                    ]}>
                    <View style={{marginBottom:FONT_SIZE,alignItems:"center"}}>
                        <View style={[
                            Containers.mediumButton,
                            StylesColors.background.primary,
                            {marginBottom:FONT_SIZE*2}
                            ]}>
                            <Text style={[Styles.primaryH1]}>Vaca {thisVaca?.name}</Text>
                        </View>
                        <View style={[Containers.flexRow,Containers.spaceBetween,Containers.commonWidth]}>
                            <View style={[
                                Containers.smallButton,
                                StylesColors.background.secondary,
                                {marginRight:FONT_SIZE * 0.25}]}>
                                <Text style={[
                                    Typography.h2,
                                    StylesColors.font.secondary,
                                    {
                                        textAlign:"center",
                                    }
                                    ]}>Mastite :</Text>
                            </View>
                            <SelectBoxBool
                                value = {mastite}
                                open = {true}
                                trueResponse="Sim"
                                falseResponse="Não"
                                onSelectTrue = { () => {
                                    setMastite(true);
                                    setModified(true);
                                }}
                                onSelectFalse = { () => {
                                    setMastite(false);
                                    setModified(true);
                                }}
                            />
                        </View>
                    </View>

                    <SetDate 
                        title = "Adicionar ou modificar data de cria"
                        date = {pariu}
                        marginBottom = {1}
                        item = "Cria :"
                        onConfirm = { (newDate) => {
                            setPariu(newDate);
                            setModified(true);
                        }}
                    />

                    <SetDate 
                        title = "Adicionar ou modificar última data de monta"
                        date = {monta}
                        item = "Monta :"
                        onConfirm = { (newDate) => {
                            setMonta(newDate);
                            setModified(true);
                        }}
                        marginBottom = {1}
                    />

                    <SetDate 
                        title = "Modificar data de nascimento"
                        date = {nascimento}
                        item = "Nascimento :"
                        marginBottom={1}
                        onConfirm = { (newDate) => {
                            setNascimento(newDate);
                            setModified(true);
                        }}
                    />

                    <Pressable style={[Containers.button,StylesColors.background.danger]}
                        onPress={ () => {
                            Alert.alert(
                                "Cuidado!",
                                "Deseja mesmo deletar todo resgistro desta vaca?",[
                                {
                                    text:"Sim",
                                    onPress: () => deleteVaca(route.params.name),
                                    style:"cancel"
                                },
                                {
                                    text:"Não",
                                    style:"default"
                                }
                            ])
                        }}
                    >
                        <Text style={[Typography.h1,StylesColors.font.danger]}>Deletar</Text>
                    </Pressable>
                </View>
                <Warning 
                    visible = {modified}
                    title = "Registro Modificado"
                    msg = "Aperte em confirmar para salvar as modificações ou volte para cancela-las."
                />
            </View>
            <View style={[Containers.footer,StylesColors.background.primary]}>
                <Pressable style={[Containers.button,modified ? StylesColors.background.secondary : StylesColors.background.default]}
                    onPress = { () => updateVaca({
                        name:route.params.name,
                        mastite:mastite,
                        nascimento:nascimento,
                        monta:monta,
                        pariu:pariu,
                        modified:modified,
                    })}
                >
                    <Text style={Styles.secondaryH1}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default EditarAnimal;

type EditarAnimalProps = NativeStackScreenProps<RootStackParamList,"EditarAnimal">;

interface UpdateVacaProps {
    name:string;
    mastite: boolean | undefined;
    monta: Date | undefined;
    pariu: Date | undefined;
    nascimento: Date;
    modified: boolean;
}

class VacaUpdateClass {
    constructor( name:string ){
        this.name = name;
    };
    name!:string;
    born?: Date;
    mastite?: boolean;
    monta?: Date;
    pariu?: Date;
    raca?: string;
}