import colors from "../../constants/color.styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: "500",
        backgroundColor: colors.white.secondary,
        padding: 12,
        borderRadius: 8,
    },
    buttonIcon: {
        padding: 6,
    },

    regular: {
        backgroundColor: colors.grey.secondary,
    },

    primary: {
        backgroundColor: colors.purple.primary
    },
    text: {
        color: colors.grey.primary,
    },
    primaryText: {
        color: colors.white.primary,
    },
    hover: {
        opacity: 0.8
    },
    icon: {
        color: colors.grey.primary,
        fontSize: 16
    }
})