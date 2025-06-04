import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dispatch, SetStateAction } from 'react';
import { AppColors, AppFonts } from "../../theme/AppTheme";

interface Section {
    id: number;
    floor_start: number | null;
    floor_end: number | null;
    personas: string[];
}

interface ModalTartarusProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    title: string;
    sections: Section[];
}

export const ModalTartarus = ({modalVisible, setModalVisible, title, sections}: ModalTartarusProps) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.textTitle}>{title}</Text>

                            {sections.map((section, index) => (
                                <View key={section.id}>
                                    <Text style={styles.sectionTitle}>
                                        {section.floor_start !== null && section.floor_end !== null
                                            ? `Floors ${section.floor_start} - ${section.floor_end}`
                                            : 'No assigned floors'}
                                    </Text>
                                    <Text style={styles.modalText}>
                                        {section.personas.join(', ')}
                                    </Text>
                                </View>
                            ))}
                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>X</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 30,
        backgroundColor: AppColors.backgroundSecondary,
        borderRadius: 20,
        borderColor: AppColors.primary,
        borderWidth: 1,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
    },
    buttonText: {
        color: AppColors.textColor,
        fontFamily: AppFonts.bold,
        fontSize: 15,
    },
    textTitle: {
        color: AppColors.textColor,
        fontFamily: AppFonts.bold,
        fontSize: 17,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: 10
    },
    modalText: {
        fontSize: 14,
        fontFamily: AppFonts.regular,
        color: AppColors.textColor,
        marginTop: 10
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: AppFonts.semiBold,
        marginTop: 20,
        color: AppColors.textColor,
        textDecorationLine: 'underline',
    },
});
