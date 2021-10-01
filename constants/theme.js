import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#1490A6", // orange
    secondary: "#CDCDD2",   // gray
    lightGray: "#00D42A",
    error: "#FFD300",

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    theme: '#1490A6',
    black: '#010A03',
    gray: '#8D8D8D',
    danger:'#E24B2B',

    btnFocused : '#00BA25',
    btnDisabled : 'rgba(0, 212, 42, 0.2);',
    inuputBackground : '#FAFAFA',
    inputColor : '#CBCBCB',
    inputPlaceholderColor : 'rgba(1, 10, 3, 0.4)',
    inputSuccessBorder : '1px solid #00D42A',
    inputSuccesseBoxShadow : '0px 0px 3px 1px rgba(0, 212, 42, 0.2)',
    inputErrorBorder : '1px solid #FE2D3F',
    inputErrorBoxShadow : '0px 0px 3px 1px rgba(217, 0, 0, 0.2)',
    inputSuccessBorder : '1px solid #00D42A',
    inputSuccesseBoxShadow : '0px 0px 3px 1px rgba(0, 212, 42, 0.2)',
    inputErrorBorder : '1px solid #FE2D3F',
    inputErrorBoxShadow : '0px 0px 3px 1px rgba(217, 0, 0, 0.2)',
    modalBackGround : '#DAFFD5',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 16,
    padding32: 32,
    padding12: 12,

    // font sizes
    largeTitle: 25,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    headerTitle : 21,

    // app dimensions
    width,
    height,

    buttonRadius : 4
};

export const FONTS = {
    headerLine4: { fontSize: 36, lineHeight: 49,letterSpacing : 0.25},
    headerLine5: { fontSize: 20, lineHeight: 34,letterSpacing : 0,fontWeight:'bold'},
    headerLine6: { fontSize: 21, lineHeight: 29,letterSpacing : 0.15},
    subtitle3: { fontSize: 15, lineHeight: 20,letterSpacing : 0.1},
    subtitle2: { fontSize: 15, lineHeight: 20,letterSpacing : 0.1},
    subtitle1: { fontSize: 17, lineHeight: 23,letterSpacing : 0.15},
    body1: { fontSize: 17, lineHeight: 23,letterSpacing : 0.5},
    body2: { fontSize: 15, lineHeight: 20,letterSpacing : 0.25},
    button: { fontSize: 17, lineHeight: 23,letterSpacing : 1.25,fontWeight:'bold',textTransform: 'uppercase'},
    status: { fontSize: 11, lineHeight: 18,letterSpacing : 0.4},
    alert: { fontSize: 11, lineHeight: 13,letterSpacing : 0.25},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;