import React from 'react';
import {Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dispatch, SetStateAction } from 'react';
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface ModalCharacterProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    image: any;
    descriptionCharacter: string;
}

export const ModalCharacter = ({ modalVisible, setModalVisible, image, descriptionCharacter }: ModalCharacterProps) => {
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
                                <Image source={image} style={styles.image}/>
                            </View>
                            <Text style={styles.modalText}>{descriptionCharacter}</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>X</Text>
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
        alignItems: 'center',
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
        backgroundColor: AppColors.backgroundSecondary,
        position: 'absolute',
        right: 10,
        top: 10,
    },
    textStyle: {
        color: AppColors.textColor,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
    },
    modalText: {
        fontSize: 13,
        fontFamily: AppFonts.regular,
        color: AppColors.textColor,
        marginTop: 20
    },
    titleText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        marginBottom: 4,
        color: AppColors.textColor,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
});

