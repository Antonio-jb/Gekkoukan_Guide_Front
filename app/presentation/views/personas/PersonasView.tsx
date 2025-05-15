import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {CardPersona} from "../../components/persona/CardPersona";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesPersona";

const PersonasView = ({navigation}: PropsStackNavigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Personas</Text>
                <View style={{ width: 24 }} />

            </View>
            <View style={styles.containerPersonas}>
                <TouchableOpacity onPress={() => {}}>
                    <CardPersona name={"Jack Frost"} arcana={"Magician"} imagePersona={require('../../../../assets/jackfrost.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PersonasView;