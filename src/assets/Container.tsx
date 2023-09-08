import {  Dimensions, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { FONT_SIZE, TOTAL_HEIGHT, TOTAL_WIDTH } from "./Sizes";

export const Containers:ContainersInterfaces = StyleSheet.create({
    body: {
        width: TOTAL_WIDTH,
        height: TOTAL_HEIGHT,
    },
    scrollView: {
        heigh:TOTAL_HEIGHT,
        width:TOTAL_WIDTH,
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        height: TOTAL_HEIGHT * 0.10,
        position:"absolute",
        bottom:0,
        right:0,
        width: TOTAL_WIDTH,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    button: {
        height: ( FONT_SIZE * 2.4 ),
        width: TOTAL_WIDTH * 0.8,
        borderRadius: FONT_SIZE * 1.2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE * 0.5,
    },
    mediumButton: {
        height: ( FONT_SIZE * 2.4 ),
        width: TOTAL_WIDTH * 0.6,
        borderRadius: FONT_SIZE * 1.2,
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE * 0.5,
    },
    smallButton: {
        height: ( FONT_SIZE * 2.4 ),
        width: TOTAL_WIDTH * 0.3,
        borderRadius: FONT_SIZE * 1.2,
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE * 0.5,
    },
    exSmallButton:{
        height: ( FONT_SIZE * 2.4 ),
        width: TOTAL_WIDTH * 0.2,
        borderRadius: FONT_SIZE * 1.2,
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        elevation: FONT_SIZE * 0.5,
    },
    section: {
        borderRadius: FONT_SIZE,
        padding: FONT_SIZE ,
        marginBottom: FONT_SIZE,
        width: TOTAL_WIDTH * 0.9,
        elevation: FONT_SIZE * 0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
        height: ( FONT_SIZE * 3 ),
        borderRadius: FONT_SIZE * 1.5,
        elevation: FONT_SIZE * 0.5
    },
    main: {
        height: TOTAL_HEIGHT * 0.9,
        width: TOTAL_WIDTH,
        alignItems:"center",
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
    },
    marginBottom:{
        marginBottom:FONT_SIZE
    },
    commonWidth:{
        width:TOTAL_WIDTH * 0.8
    }
});

export interface ContainersInterfaces {
    body:StyleProp<ViewStyle>,
    scrollView:StyleProp<ViewStyle>,
    footer:StyleProp<ViewStyle>,
    button:StyleProp<ViewStyle>,
    mediumButton:StyleProp<ViewStyle>,
    smallButton:StyleProp<ViewStyle>,
    exSmallButton:StyleProp<ViewStyle>,
    section:StyleProp<ViewStyle>,
    input:StyleProp<ViewStyle>,
    main:StyleProp<ViewStyle>,
    spaceBetween:StyleProp<ViewStyle>,
    flexColumn:StyleProp<ViewStyle>,
    flexRow:StyleProp<ViewStyle>,
    marginBottom:StyleProp<ViewStyle>,
    commonWidth:StyleProp<ViewStyle>,
}