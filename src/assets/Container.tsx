import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { AppColors } from "./AppColors";
import { FONT_SIZE } from "./Sizes";

export interface ContainersInterfaces {
    body:StyleProp<ViewStyle>,
    button:StyleProp<ViewStyle>,
    section:StyleProp<ViewStyle>,
    input:StyleProp<ViewStyle>,
    main:StyleProp<ViewStyle>,
    spaceBetween:StyleProp<ViewStyle>,
    flexColumn:StyleProp<ViewStyle>
}

export const Containers:ContainersInterfaces = StyleSheet.create({
    body: {
        minWidth: "100%",
        height: "100%",
    },
    button: {
        height: ( FONT_SIZE * 3 ),
        borderRadius: FONT_SIZE * 1.5,
        marginBottom: FONT_SIZE,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE
    },
    section: {
        borderRadius: FONT_SIZE,
        padding: FONT_SIZE ,
        marginBottom: FONT_SIZE,
    },
    input: {
        height: ( FONT_SIZE * 2 ),
        borderRadius: FONT_SIZE
    },
    main: {
        padding: FONT_SIZE
    },
    spaceBetween: {
        justifyContent: "space-between",
        display: "flex",
        width: "100%",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
    }
});