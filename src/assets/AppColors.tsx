
export interface BasicColorsInterface {
    default : string,
    primary : string,
    secondary : string
}

export interface AppColorsInterface {
    font : BasicColorsInterface,
    background : BasicColorsInterface
}

export const AppColors:AppColorsInterface = {
    font:{
        default: "#666",
        primary: "#fafafa",
        secondary: "#202020"
    },
    background: {
        default: "#eee",
        primary: "#4aba50",
        secondary: "#fff",
    }
} 