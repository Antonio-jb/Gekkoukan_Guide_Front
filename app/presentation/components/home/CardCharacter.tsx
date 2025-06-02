import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface Props{
    name: string,
    persona: string,
    imageCharacter: any,
    isDLC?: boolean;
}

export const CardCharacter = ({name, persona, imageCharacter, isDLC}: Props) => {
    return (
        <View style={[styles.container, isDLC && styles.dlcCard]}>
            <View style={styles.containerInfo}>
                <Text style={styles.nameCharacter}>
                    {isDLC ? '🔒 Content' : name}
                </Text>
                <View style={styles.containerPersonaInfo}>
                    {!isDLC && (
                        <Image source={require('../../../../assets/personaicon.png')} style={styles.personaIcon}/>
                    )}
                    <Text style={styles.textPersona}>
                        {isDLC ? '⚠️ Spoiler' : 'Persona: ' + persona}
                    </Text>
                </View>
                <Text style={styles.textCharacter}>“I am thou, thou art I...”</Text>
            </View>
            <Image source={imageCharacter} style={styles.imageCharacter}/>
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
        fontSize: 13.5,
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
        position: 'absolute',
        bottom: 1,
        right: 10,
        width: 128,
        height: 128,
        resizeMode: 'contain',
    },
    dlcCard: {
        opacity: 0.5,
        borderColor: 'red',
        borderWidth: 2,
    },
})