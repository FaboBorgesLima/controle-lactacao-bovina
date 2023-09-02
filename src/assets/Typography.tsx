import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { FONT_SIZE } from "./Sizes";

export interface TypographyInterface {
    p:StyleProp<TextStyle>,
    h1:StyleProp<TextStyle>,
    h2:StyleProp<TextStyle>,
    h3:StyleProp<TextStyle>,
}

export const Typography:TypographyInterface = StyleSheet.create({
    p: {
        fontSize: FONT_SIZE,
    },
    h1: {
        fontSize: FONT_SIZE*1.2,
        fontWeight: "bold",
        textAlign:"center"
    },
    h2: {
        fontSize: FONT_SIZE*1.1,
        fontWeight: "bold",
    },
    h3: {
        fontSize: FONT_SIZE,
        fontWeight: "bold"
    }
});

export default Typography;