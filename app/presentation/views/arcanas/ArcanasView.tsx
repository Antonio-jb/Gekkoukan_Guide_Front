import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {CardPersona} from "../../components/persona/CardPersona";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesArcanas";
import {CardArcana} from "../../components/arcanas/CardArcana";

const ArcanasView = ({navigation}: PropsStackNavigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Arcanas</Text>
                <View style={{ width: 24 }} />
            </View>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.textBosses}>See all the story bosses</Text>
            </TouchableOpacity>
            <View style={styles.containerArcanas}>
                <TouchableOpacity onPress={() => {}}>
                    <CardArcana name={"Magician"} imageArcana={require('../../../../assets/arcana.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ArcanasView;