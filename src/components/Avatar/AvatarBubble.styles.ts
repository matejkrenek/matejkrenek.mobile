import { StyleSheet } from "react-native";
import colors from "../../constants/color.styles";
import fonts from "../../constants/fonts.styles";

export default StyleSheet.create({
    avatar: {
        flexShrink: 0,
        position: 'relative',
        width: 38,
        height: 38,
        backgroundColor: colors.grey.secondary,
        borderRadius: 38,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.white.primary,
        overflow: "hidden"
    },
    inicials: {
        fontWeight: "500",
        fontSize: fonts.size.p,
        color: colors.grey.primary
    },
    small: {
        width: 32,
        height: 32,
        borderRadius: 32,
    }
})