import { StyleSheet } from "react-native";
import colors from "../../constants/color.styles";

export default StyleSheet.create({
    navbar: {
        paddingTop: 36,
        paddingBottom: 12,
        paddingHorizontal: 24,
        borderBottomColor: colors.grey.secondary,
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})