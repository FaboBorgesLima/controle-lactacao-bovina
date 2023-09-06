import { Dimensions } from "react-native";

export const FONT_SIZE = ( ( Dimensions.get("screen").width ) / 20 );
export const FONT_RESIZED = FONT_SIZE * ( Dimensions.get("screen").fontScale );
export const TOTAL_HEIGHT = Dimensions.get("screen").height * 0.85;