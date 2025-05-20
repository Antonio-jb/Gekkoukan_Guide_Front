import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppColors, AppFonts } from "../../../theme/AppTheme";

interface Props {
    arcana: string,
    level: number,
    strength: number,
    magic: number,
    endurance: number,
    agility: number,
    luck: number,
}

export const StatsPersona = ({arcana, level, strength, magic, endurance, agility, luck}: Props) => {
    return (
        <View style={styles.containerStats}>
            <View style={styles.row}>
                <Text style={styles.label}>Arcana</Text>
                <Text style={styles.value}>{arcana}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Level</Text>
                <Text style={styles.value}>{level}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Strength</Text>
                <Text style={styles.value}>{strength}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Magic</Text>
                <Text style={styles.value}>{magic}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Endurance</Text>
                <Text style={styles.value}>{endurance}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Agility</Text>
                <Text style={styles.value}>{agility}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Luck</Text>
                <Text style={styles.value}>{luck}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStats: {
        paddingHorizontal: 65,
        paddingVertical: 25,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    label: {
        color: '#FFFFFF',
        fontFamily: AppFonts.regular,
        textDecorationLine: 'underline',
        fontSize: 14,
    },
    value: {
        color: '#FFFFFF',
        fontFamily: AppFonts.regular,
        fontSize: 14,
    },
    bold: {
        fontFamily: AppFonts.bold,
    }
});
