import React from 'react';
import {Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dispatch, SetStateAction } from 'react';
import {AppColors, AppFonts} from "../../theme/AppTheme";

interface ModalSagaProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
    name: string;
    image: any;
    description: string;
}

export const ModalArcana = ({ modalVisible, setModalVisible, name, image, description }: ModalSagaProps) => {
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
                                <Text style={styles.titleText}>{name}</Text>
                                <Image source={image} style={styles.imageArcana}/>
                            </View>
                            <Text style={styles.modalText}>{description}</Text>
                            <TouchableOpacity onPress={() => {}}>
                                <Text style={styles.textButton}>See more Personas from this arcana</Text>
                            </TouchableOpacity>
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
        marginVertical: 20
    },
    titleText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        marginBottom: 4,
        color: AppColors.textColor,
    },
    imageArcana: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    textButton:{
        fontSize: 15,
        textAlign: 'center',
        fontFamily: AppFonts.semiBold,
        textDecorationLine: 'underline',
        color: AppColors.textColor,
        marginTop: 10
    }
});

