import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../theme/AppTheme";

interface Props{
    onPress: () => void,
    text: string
}

const colorMap: { [key: string]: string } = {
    personas: AppColors.btnPersona,
    sociallinks: AppColors.btnSocialLink,
    tartarus: AppColors.btnTartarus,
    arcanas: AppColors.btnArcana,
};

export const ButtomFilter = ({text, onPress}: Props) => {
    const normalize = (str: string) => str.toLowerCase().replace(/\s+/g, '');
    const backgroundColor = colorMap[normalize(text)] || AppColors.primary;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.boton, { backgroundColor }]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        width: '46%',
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        elevation: 2
    },
    text:{
        color: AppColors.textColor,
        fontFamily: AppFonts.bold
    }
})