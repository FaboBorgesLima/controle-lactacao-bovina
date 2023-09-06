
export interface BasicColorsInterface {
    default : string,
    primary : string,
    secondary : string,
    danger : string,
}

export interface AppColorsInterface {
    font : BasicColorsInterface ,
    background : BasicColorsInterface
}

export const AppColors:AppColorsInterface = {
    font:{
        default: "#666",
        primary: "#fafafa",
        secondary: "#202020",
        danger:"#fff",
    },
    background: {
        default: "#eee",
        primary: "#4aba50",
        secondary: "#fff",
        danger: "#DC3545",
    }
} 