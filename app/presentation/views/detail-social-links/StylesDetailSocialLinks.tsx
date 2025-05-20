import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";
import App from "../../../../App";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: AppColors.backgroundPrimary,
        paddingBottom: 60,
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
    containerInfoSocialLink:{
        width: '100%',
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    imageSocialLink:{
        width: 280,
        height: 280,
        resizeMode: 'contain'
    },
    descriptionSocialLink:{
        fontSize: 13,
        color: AppColors.textColor,
        fontFamily: AppFonts.regular
    },
    containerRanks:{
        width: '100%',
        gap: 10,
        marginBottom: 90
    },
    titleRank:{
        fontSize: 16,
        color: AppColors.textColor,
        fontFamily: AppFonts.semiBold,
        textAlign: 'center'
    },
    subtitleRank:{
        fontSize: 14,
        color: AppColors.textColor,
        fontFamily: AppFonts.semiBold,
        textDecorationLine: "underline",
        marginVertical: 10
    },
    descriptionRank:{
        fontSize: 13,
        color: AppColors.textColor,
        fontFamily: AppFonts.regular,
    },
    containerRank:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingLeft: 16,
    },
    iconItem:{
        width: 4,
        height: 4,
        resizeMode: 'contain',
    }
})
