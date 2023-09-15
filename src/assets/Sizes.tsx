import { Dimensions, StatusBar } from "react-native";

export const FONT_SIZE = ( ( Dimensions.get("window").width ) / 20 );
export const FONT_RESIZED = FONT_SIZE ;
export const TOTAL_HEIGHT = Dimensions.get("window").height * 0.93 ;
export const TOTAL_WIDTH = Dimensions.get("window").width ;