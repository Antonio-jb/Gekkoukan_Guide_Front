import React from 'react';
import {StyleSheet, View, Text, Image} from "react-native";
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface Props{
    name: string,
    imageSocialLink: any,
    arcana: any,
}

export const CardSocialLink = ({name, imageSocialLink, arcana}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.nameCharacter}>{name}</Text>
                <View style={styles.containerArcanaName}>
                    <Image source={require('../../../../assets/arcanas-logo.png')} style={styles.icon}/>
                    <Text style={styles.nameCharacter}>{arcana}</Text>
                </View>
            </View>
            <Image source={imageSocialLink} style={styles.imageCharacter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 130,
        backgroundColor: AppColors.backgroundSecondary,
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 25,
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        marginVertical: 15
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
        fontSize: 14,
    },
    imageContainer: {
        justifyContent: 'flex-end',
    },
    imageCharacter: {
        position: 'absolute',
        bottom: 1,
        right: 17,
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    containerArcanaName:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 5
    }
})