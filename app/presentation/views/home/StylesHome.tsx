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
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode:'cover'
    },
    buttonContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    charactersContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 25
    },
    textCharacters:{
        fontFamily: AppFonts.bold,
        color: AppColors.textColor,
        fontSize: 18,
        marginBottom: 8
    }
})
