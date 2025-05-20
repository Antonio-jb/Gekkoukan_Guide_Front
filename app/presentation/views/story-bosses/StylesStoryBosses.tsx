import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: AppColors.backgroundPrimary
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    icon: {
        width: 24,
        height: 24,
    },
    textHeader: {
        fontSize: 18,
        fontFamily: AppFonts.bold,
        color: AppColors.textColor,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
    },
    header: {
        borderBottomWidth: 2,
        marginBottom: 10,
        marginTop: 30
    },
    headerText: {
        flex: 1,
        fontFamily: AppFonts.semiBold,
        fontSize: 16,
        color: AppColors.textColor,
        textDecorationLine: 'underline'
    },
    text: {
        flex: 1,
        fontSize: 13,
        color: '#CCCCCC',
        fontFamily: AppFonts.regular,
    },
    spoilerContainer: {
        alignItems: 'center',
    },
    spoilerLabel: {
        fontSize: 13,
        color: AppColors.textColor,
        fontFamily: AppFonts.semiBold,
        marginBottom: 4,
    },
    hiddenTextBox: {
        backgroundColor: AppColors.primary,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
    },
    hiddenText: {
        color: '#000000',
        fontSize: 13,
        fontFamily: AppFonts.regular,
    },
    revealedText: {
        color: '#000000',
        fontSize: 13,
        fontFamily: AppFonts.regular,
    },
});
