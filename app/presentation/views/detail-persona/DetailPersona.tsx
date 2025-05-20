import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesDetailPersona";
import TabViewInfo from "./tab-view/TabViewPersona";

const DetailPersona = ({navigation}: PropsStackNavigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Jack Frost</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerInfoPersona}>
                <Image source={require('../../../../assets/jackfrost.png')} style={styles.imagePersona}/>
                <Text style={styles.descriptionPersona}>A winter fairy of European descent. He leaves ice patterns on windows and nips people's noses. Though normally an innocent creature, he will freeze his victims to death if provoked.</Text>
            </View>
            <View style={styles.containerTabView}>
                <TabViewInfo/>
            </View>
        </View>
    )
}

export default DetailPersona;