import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface Props {
    name: string;
    imageArcana: any;
    isSpoiler?: boolean;
}

export const CardArcana = ({ name, imageArcana, isSpoiler }: Props) => {
    return (
        <View style={[styles.container, isSpoiler && styles.spoilerCard]}>
            <View style={styles.containerInfo}>
                <Text style={styles.nameArcana}>
                    {isSpoiler ? '⚠️ Spoiler' : name}
                </Text>
            </View>
            <Image source={imageArcana} style={styles.imageArcana} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140,
        backgroundColor: AppColors.backgroundSecondary,
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 25,
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerInfo:{
        justifyContent: 'center',
        gap: 20
    },
    personaIcon: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginRight: 5
    },
    nameArcana:{
        fontFamily: AppFonts.semiBold,
        color: AppColors.textColor,
        fontSize: 15,
    },
    containerPersonaInfo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPersona:{
        fontFamily: AppFonts.regular,
        color: AppColors.textColor,
        fontSize: 14,
    },
    textArcana:{
        fontFamily: AppFonts.regular,
        color: AppColors.textColor,
        fontSize: 12,
    },
    imageArcana: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    spoilerCard: {
        opacity: 0.5,
        borderColor: 'red',
        borderWidth: 2,
    },
})