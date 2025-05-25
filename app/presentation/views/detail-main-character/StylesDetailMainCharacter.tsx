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
    containerPersonas:{
        marginVertical: 35,
    },
    containerInfoCharacter:{
        width: '100%',
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    imageCharacter:{
        width: 210,
        height: 210,
        resizeMode: 'contain'
    },
    descriptionCharacter:{
        fontSize: 14,
        color: AppColors.textColor,
        fontFamily: AppFonts.regular
    },
    textTitle: {
        fontSize: 16,
        fontFamily: AppFonts.bold,
        color: AppColors.textColor,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: 15,
    },
    containerTabView:{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
