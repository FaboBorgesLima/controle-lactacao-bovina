
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
        default: "#333",
        primary: "#eee",
        secondary: "#222"
    },
    background: {
        default: "#eee",
        primary: "#4aba50",
        secondary: "#fff",
    }
} 