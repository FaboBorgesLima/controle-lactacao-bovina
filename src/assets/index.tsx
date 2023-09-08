import { Typography } from "./Typography";
import { Containers } from "./Container";
import { FONT_SIZE, FONT_RESIZED, TOTAL_HEIGHT, TOTAL_WIDTH } from "./Sizes";
import { AppColors, BasicColorsInterface } from "./AppColors";
import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

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
        } ,
        danger : {
            backgroundColor : AppColors.background.danger
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
        } ,
        danger : {
            color : AppColors.font.danger
        }
    })
}

const Styles:StylesType = {
    defaultButton : StyleSheet.compose(
        Containers.button,
        StylesColors.background.default,
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

type StylesType = {
    [name:string]:StyleProp<ViewStyle | TextStyle | ImageStyle>
};

interface StylesColorsInterface {
    background : Modify<BasicColorsInterface,{
        default: StyleProp<ViewStyle>,
        primary: StyleProp<ViewStyle>,
        secondary: StyleProp<ViewStyle>,
        danger: StyleProp<ViewStyle>,
        }>
    font : Modify<BasicColorsInterface,{
        default: StyleProp<TextStyle>,
        primary: StyleProp<TextStyle>,
        secondary: StyleProp<TextStyle>,
        danger: StyleProp<TextStyle>,
        }>,
}

export { Typography , Containers , AppColors , Styles , StylesColors, FONT_RESIZED, FONT_SIZE, TOTAL_HEIGHT,TOTAL_WIDTH};