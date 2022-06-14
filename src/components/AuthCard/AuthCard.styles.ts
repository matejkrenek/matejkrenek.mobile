import colors from "../../constants/color.styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    authCard: {
        backgroundColor: colors.white.secondary,
        padding: 36,
        borderRadius: 16,
        maxWidth: 300,
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
})