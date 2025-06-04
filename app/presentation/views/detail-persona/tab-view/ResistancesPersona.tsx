import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppColors, AppFonts } from "../../../theme/AppTheme";

interface Props {
    weak: string[],
    resists: string[],
    reflects: string[],
    absorbs: string[],
    nullifies: string[],
}

export const ResistancesPersona = ({weak, resists, reflects, absorbs, nullifies}: Props) => {
    return (
        <View style={styles.containerStats}>
            <View style={styles.row}>
                <Text style={styles.label}>Weak: </Text>
                <Text style={styles.value}>{weak}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Resists: </Text>
                <Text style={styles.value}>{resists}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Reflects: </Text>
                <Text style={styles.value}>{reflects}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Absorbs: </Text>
                <Text style={styles.value}>{absorbs}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Nullifies: </Text>
                <Text style={styles.value}>{nullifies}</Text>
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
