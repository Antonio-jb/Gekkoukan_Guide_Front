import React from 'react';
import {Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dispatch, SetStateAction } from 'react';
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface ModalTartarusProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    title: string;
    sectionTitle: string;
    personas: string;
    sectionTitle2?: string;
    personas2?: string;
}

export const ModalTartarus = ({
                                  modalVisible, setModalVisible,
                                  title, sectionTitle, personas, sectionTitle2, personas2}: ModalTartarusProps) => {
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
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                                <Text style={styles.textTilte}>{title}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                                <Text style={styles.sectionTitle}>{sectionTitle}</Text>
                            </View>
                            <Text style={styles.modalText}>{personas}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                                <Text style={styles.sectionTitle}>{sectionTitle2}</Text>
                            </View>
                            <Text style={styles.modalText}>{personas2}</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.buttonClose}>X</Text>
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
    button: {
        padding: 10,
    },
    buttonClose: {
        color: AppColors.textColor,
        fontWeight: 'bold',
        fontSize: 17,
        position: 'absolute',
        right: 10,
        top: 10,
    },
    textTilte: {
        color: AppColors.textColor,
        fontWeight: 'bold',
        fontSize: 17,
        textDecorationLine: 'underline',
    },
    modalText: {
        fontSize: 14,
        fontFamily: AppFonts.regular,
        color: AppColors.textColor,
        marginTop: 20
    },
    sectionTitle: {
        fontSize: 17,
        fontFamily: AppFonts.bold,
        marginBottom: 4,
        marginTop: 20,
        color: AppColors.textColor,
        textDecorationLine: 'underline',
    },
});

