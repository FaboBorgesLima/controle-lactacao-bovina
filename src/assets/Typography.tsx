import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { FONT_RESIZED, FONT_SIZE } from "./Sizes";

export const Typography:TypographyInterface = StyleSheet.create({
    label:{
        marginBottom: FONT_SIZE,
        fontSize: FONT_RESIZED*1.1,
        textAlign: "center",
        fontWeight: "bold"
    },
    p: {
        fontSize: FONT_RESIZED,
    },
    h1: {
        fontSize: FONT_RESIZED*1.2,
        fontWeight: "bold",
        textAlign:"center"
    },
    h2: {
        fontSize: FONT_RESIZED*1.1,
        fontWeight: "bold",
    },
    h3: {
        fontSize: FONT_RESIZED,
        fontWeight: "bold"
    }
});

export default Typography;

export interface TypographyInterface {
    label:StyleProp<TextStyle>,
    p:StyleProp<TextStyle>,
    h1:StyleProp<TextStyle>,
    h2:StyleProp<TextStyle>,
    h3:StyleProp<TextStyle>,
}