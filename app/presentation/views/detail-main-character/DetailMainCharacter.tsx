import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesDetailMainCharacter";
import TabViewInfo from "./tab-view/TabViewPersona";

const DetailMainCharacter = ({navigation}: PropsStackNavigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Makoto Yuki</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerInfoCharacter}>
                <Image source={require('../../../../assets/Makoto-Yuki.png')} style={styles.imageCharacter}/>
                <Text style={styles.descriptionCharacter}>Makoto Yuki is the playable main character which has dark blue hair, unkempt at the front with bangs covering his right eye, blue eyes and a light build, being average height.</Text>
            </View>
            <View>
                <Text style={styles.textTitle}>Social Stats</Text>
            </View>
            <View style={styles.containerTabView}>
                <TabViewInfo/>
            </View>
        </View>
    )
}

export default DetailMainCharacter;