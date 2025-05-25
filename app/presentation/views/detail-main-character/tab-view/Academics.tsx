import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppColors, AppFonts } from "../../../theme/AppTheme";

interface Props {
    hint1: string,
    hint2: string,
    hint3: string,
}

export const Academics = ({hint1, hint2, hint3}: Props) => {
    return (
        <View style={styles.containerStats}>
            <View style={styles.row}>
                <Text style={styles.label}>Hint 1:</Text>
                <Text style={styles.value}>{hint1}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Hint 2:</Text>
                <Text style={styles.value}>{hint2}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Hint 3:</Text>
                <Text style={styles.value}>{hint3}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStats: {
        paddingLeft: 20,
        paddingRight: 57,
        paddingVertical: 5,
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
