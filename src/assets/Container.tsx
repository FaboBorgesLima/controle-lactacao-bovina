import {  StyleProp, StyleSheet, ViewStyle } from "react-native";
import { FONT_SIZE } from "./Sizes";

export const Containers:ContainersInterfaces = StyleSheet.create({
    body: {
        minWidth: "100%",
        height: "100%",
    },
    button: {
        height: ( FONT_SIZE * 3 ),
        borderRadius: FONT_SIZE * 1.5,
        marginBottom: FONT_SIZE * 1.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE,
    },
    section: {
        borderRadius: FONT_SIZE,
        padding: FONT_SIZE ,
        marginBottom: FONT_SIZE,
    },
    input: {
        height: ( FONT_SIZE * 3 ),
        borderRadius: FONT_SIZE * 1.5,
        elevation: FONT_SIZE
    },
    main: {
        padding: FONT_SIZE * 1.5,
    },
    spaceBetween: {
        justifyContent: "space-between",
        display: "flex",
        width: "100%",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
    }
});

export interface ContainersInterfaces {
    body:StyleProp<ViewStyle>,
    button:StyleProp<ViewStyle>,
    section:StyleProp<ViewStyle>,
    input:StyleProp<ViewStyle>,
    main:StyleProp<ViewStyle>,
    spaceBetween:StyleProp<ViewStyle>,
    flexColumn:StyleProp<ViewStyle>,
    flexRow:StyleProp<ViewStyle>,
}