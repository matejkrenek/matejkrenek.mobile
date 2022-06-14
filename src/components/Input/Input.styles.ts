import colors from "../../constants/color.styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    label: {
        fontSize: 12,
        fontWeight: "400",
        marginBottom: 4
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    input: {
        fontSize: 14,
        fontWeight: "400",
        backgroundColor: "transparent",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: colors.black.secondary,
        borderRadius: 6
    }
})