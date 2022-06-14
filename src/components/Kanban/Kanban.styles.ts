import { StyleSheet } from "react-native";
import colors from "../../constants/color.styles";

export default StyleSheet.create({
    kanban: {
        paddingLeft: 8,
    },
    kanbanColumn: {
        borderRadius: 16,
        marginHorizontal: 16,
        backgroundColor: colors.white.secondary
    },
    kanbanColumn__header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    kanbanColumn__content: {
        position: 'relative',
        paddingHorizontal: 20,
        display: 'flex',
    },
    hr: {
        height: 3,
        marginHorizontal: 20,
        backgroundColor: colors.grey.secondary
    },
    kanbanTask: {
        borderRadius: 16,
        marginVertical: 10,
        padding: 20,
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: colors.white.primary
    },
})