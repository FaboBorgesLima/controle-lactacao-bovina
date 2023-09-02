import { Typography } from "./Typography";
import { Containers } from "./Container";
import { AppColors, BasicColorsInterface } from "./AppColors";
import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

type StylesType = {
    [name:string]:StyleProp<ViewStyle | TextStyle | ImageStyle>
};

interface StylesColorsInterface {
    background : Modify<BasicColorsInterface,{
        default: StyleProp<ViewStyle>,
        primary: StyleProp<ViewStyle>,
        secondary: StyleProp<ViewStyle>
        }>
    font : Modify<BasicColorsInterface,{
        default: StyleProp<TextStyle>,
        primary: StyleProp<TextStyle>,
        secondary: StyleProp<TextStyle>
        }>,
}

const StylesColors:StylesColorsInterface = {
    background : StyleSheet.create({
        default : {
            backgroundColor : AppColors.background.default
        } ,
        primary : {
            backgroundColor : AppColors.background.primary
        } ,
        secondary : {
            backgroundColor : AppColors.background.secondary
        }
    }) ,
    font : StyleSheet.create({
        default : {
            color : AppColors.font.default
        } ,
        primary : {
            color : AppColors.font.primary
        } ,
        secondary : {
            color : AppColors.font.secondary
        }
    })
}

const Styles:StylesType = {
    defaultButton : StyleSheet.compose(
        Containers.button,
        StylesColors.background.default
    ) ,
    primaryButton : StyleSheet.compose(
        Containers.button,
        StylesColors.background.primary
    ) ,
    secondaryButton: StyleSheet.compose(
        Containers.button,
        StylesColors.background.secondary
    ) ,
    defaultH1: StyleSheet.compose(
        Typography.h1,
        StylesColors.font.default
    ) ,
    primaryH1: StyleSheet.compose(
        Typography.h1,
        StylesColors.font.primary
    ) ,
    secondaryH1: StyleSheet.compose(
        Typography.h1,
        StylesColors.font.secondary
    ) ,
    defaultBody: StyleSheet.compose(
        Containers.body,
        StylesColors.background.default
    ) ,
}

export { Typography , Containers , AppColors , Styles , StylesColors};