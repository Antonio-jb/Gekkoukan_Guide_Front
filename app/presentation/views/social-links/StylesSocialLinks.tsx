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

    textHeader: {
        fontSize: 18,
        fontFamily: AppFonts.bold,
        color: AppColors.textColor,
        textAlign: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    containerSocialLinks:{
        marginVertical: 35,
        gap: 25
    }
})
