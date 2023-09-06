import {  Dimensions, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { FONT_SIZE, TOTAL_HEIGHT } from "./Sizes";

export const Containers:ContainersInterfaces = StyleSheet.create({
    body: {
        width:"100%",
        height: Dimensions.get("window").height,
    },
    footer:{
        height: TOTAL_HEIGHT * 0.12,
        padding:FONT_SIZE,
    },
    button: {
        height: ( FONT_SIZE * 2.4 ),
        width: (FONT_SIZE * 17),
        borderRadius: FONT_SIZE * 1.2,
        margin: FONT_SIZE,
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE * 0.5,
    },
    section: {
        borderRadius: FONT_SIZE,
        padding: FONT_SIZE ,
        margin: FONT_SIZE,
        marginTop: 0,
        elevation: FONT_SIZE * 0.5,
    },
    input: {
        height: ( FONT_SIZE * 3 ),
        borderRadius: FONT_SIZE * 1.5,
        elevation: FONT_SIZE * 0.5
    },
    main: {
        height: TOTAL_HEIGHT * 0.88,
        alignItems:"center"
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
    footer:StyleProp<ViewStyle>,
    button:StyleProp<ViewStyle>,
    section:StyleProp<ViewStyle>,
    input:StyleProp<ViewStyle>,
    main:StyleProp<ViewStyle>,
    spaceBetween:StyleProp<ViewStyle>,
    flexColumn:StyleProp<ViewStyle>,
    flexRow:StyleProp<ViewStyle>,
}