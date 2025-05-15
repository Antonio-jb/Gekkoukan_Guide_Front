import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface Props{
    name: string,
    arcana: string,
    imagePersona: any,
}

export const CardPersona = ({name, arcana, imagePersona}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.nameCharacter}>{name}</Text>
                <View style={styles.containerPersonaInfo}>
                    <Image source={require('../../../../assets/arcanas-logo.png')} style={styles.personaIcon}/>
                    <Text style={styles.textPersona}>Arcana: {arcana}</Text>
                </View>
            </View>
            <Image source={imagePersona} style={styles.imageCharacter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: AppColors.backgroundSecondary,
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 25,
        padding: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
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
    nameCharacter:{
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
    textCharacter:{
        fontFamily: AppFonts.regular,
        color: AppColors.textColor,
        fontSize: 12,
    },
    imageContainer: {
        justifyContent: 'flex-end',
    },
    imageCharacter: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
    },
})