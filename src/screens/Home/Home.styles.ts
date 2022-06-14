import { StyleSheet } from "react-native";
import colors from "../../constants/color.styles";

export default StyleSheet.create({
    container: {
        position: "relative",
        paddingHorizontal: 24,
        paddingVertical: 24,
    },

    card: {
        padding: 20,
        width: "100%",
        borderWidth: 1,
        borderColor: colors.grey.secondary,
        borderRadius: 16,
        marginVertical: 8
    },
})