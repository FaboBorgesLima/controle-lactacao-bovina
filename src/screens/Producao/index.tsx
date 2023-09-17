import React, { ReactNode, useState } from "react";
import { ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import { Containers, FONT_SIZE, Styles, StylesColors, TOTAL_HEIGHT, Typography } from "../../assets";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import AddProducao from "./AddProducao";
import EditarProducao from "./EditarProducao";
import { useQuery } from "@realm/react";
import { Lote } from "../../realm";
import { LoteItem, Message, ShowProductionData } from "../../components";
import SelectDropdown from "react-native-select-dropdown";

const Producao = ( {navigation,route}:ProducaoProps ):JSX.Element => {

    const TODAY = new Date(),
        [ year, setYear ] = useState( route.params?.year ),
        [ month, setMonth ] = useState( route.params?.month),
        [ minDate, setMinDate ] = useState( new Date( year ? year : 0 , 0, 0, 0, 0, 0, 0) ),
        [ maxDate, setMaxDate ] = useState( new Date( year ? year+1 : 10000, 0 , 0, 0, 0, 0, 0 ) ),
        Lotes = useQuery<Lote>("Lote").sorted("start",true),
        FILTERS = " start >= $0 AND start <= $1 ",
        [ lotesFilter, setLotesFilter ] = useState(Lotes.filtered(FILTERS, minDate, maxDate ));

    function getYears(LotesList : Realm.Results<Lote>):number[] {

        let years:number[] = [];

        for(let pos = 0; pos < LotesList.length ; pos++ ){

            const Lote = LotesList[pos],
                LOTE_YEAR = Lote.start.getFullYear();
            
            if( years[years.length-1] !== LOTE_YEAR ) {

                years.push( LOTE_YEAR );
            }
        }

        return years; 
    }
    function getMonths():string[] {

        let months:string[] = ["Ano Todo"];

        for (let control = 1; control < 13 ; control++) {

            months.push(String(control));
        }

        return months;
    }

    function getMinDate(year?:number,month?:number):Date {
        return ( new Date( year ? year : 0, month ? month -1 : 0, 0, 0, 0, 0, 0) );
    }

    function getMaxDate(year?:number,month?:number):Date {
        return ( new Date(year ? month ? year : year +1 : 10000, month ? month : 0, 0, 0, 0, 0, 0) );
    }

    let message = Lotes[0] ? false : true;

    return (
        <View style={Styles.defaultBody}>
            <View style={[Containers.main,{height:TOTAL_HEIGHT*0.95}]}>
                <ScrollView contentContainerStyle={Containers.scrollView}>
                    <Pressable
                        style={[Styles.primaryButton,Containers.marginBottom,{marginTop:FONT_SIZE}]}
                        onPress={ () => navigation.navigate("AddAnimal") }
                    >
                        <Text style={Styles.primaryH1}>+ Animal</Text>
                    </Pressable>
                    <Pressable 
                        style={[Styles.primaryButton,Containers.marginBottom]}
                        onPress={ () => navigation.navigate("AddProducao") }
                    >
                        <Text style={Styles.primaryH1}>+ Produção</Text>
                    </Pressable>
                    <SelectDropdown 
                        defaultButtonText="Ano da coleta"
                        buttonStyle={[Containers.button,StylesColors.background.secondary,Containers.marginBottom]}
                        buttonTextStyle={[Typography.h1,StylesColors.font.secondary]}
                        data={getYears(Lotes)}
                        onSelect={ ( year ) => {

                            if ( typeof year === "number" ){

                                let maxDate = getMaxDate(year,month),
                                    minDate = getMinDate(year,month);

                                setYear(year);

                                setMinDate(minDate);

                                setMaxDate(maxDate);

                                setLotesFilter(Lotes.filtered(FILTERS,minDate,maxDate ));

                                navigation.navigate("Producao",{year:year,month:month});

                            } else {

                                setLotesFilter(Lotes);
                            }
                        } }
                    />
                    <SelectDropdown 
                        defaultButtonText="Mês Da Coleta"
                        buttonStyle={[Containers.button,StylesColors.background.secondary,Containers.marginBottom]}
                        buttonTextStyle={[Typography.h1,StylesColors.font.secondary]}
                        data={ getMonths() }
                        onSelect={ ( month ) => {

                            const numMonth = Number( month );

                            if ( numMonth === 0 ){

                                let minDate = getMinDate( year ),
                                    maxDate = getMaxDate( year );

                                setMonth(undefined);

                                setLotesFilter( Lotes.filtered( FILTERS, minDate, maxDate ) );

                            } else {

                                let minDate = getMinDate( year, numMonth ),
                                    maxDate = getMaxDate( year, numMonth );

                                setMonth( numMonth );

                                setMinDate( minDate );

                                setMaxDate( maxDate );

                                setLotesFilter( Lotes.filtered(FILTERS,minDate,maxDate) );
                            }
                            
                            navigation.navigate("Producao",{year:2022,month:month});
                        } }
                    />
                    <ShowProductionData 
                        visible={!message}
                        minDate={minDate.getFullYear() < 2000 ? 
                            lotesFilter.min("start")! : 
                            minDate
                        }
                        maxDate={minDate.getFullYear() < 2000 ? lotesFilter.max("end")! :
                        ( ( minDate.getFullYear() === TODAY.getFullYear() && minDate.getMonth === TODAY.getMonth ) ?
                        TODAY :
                        maxDate
                        )  }
                        numLotes={lotesFilter.length}
                        volumeTotal={lotesFilter.sum("vol")}
                        totalNumVacas={lotesFilter.sum("numVacas")}
                    />
                    {lotesFilter.map( (Lote) => (
                        <LoteItem
                            key={Lote._id.toString()}
                            uuid={Lote._id.toString()}
                            start={Lote.start}
                            end={Lote.end}
                            numVacas={Lote.numVacas}
                            vol={Lote.vol}
                        />
                    ))}
                    <Message 
                        title="Sem Registros Ainda"
                        msg="Adicione alguns lotes e eles apareceram aqui."
                        visible={message}
                    />
                </ScrollView>
            </View>
            <View style={[Containers.footer,StylesColors.background.primary,{height:TOTAL_HEIGHT*0.05}]} />
        </View>
    );
}

export { Producao, AddProducao, EditarProducao};

type ProducaoProps = NativeStackScreenProps<RootStackParamList,"Producao">