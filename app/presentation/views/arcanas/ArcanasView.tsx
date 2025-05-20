import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesArcanas";
import {CardArcana} from "../../components/arcanas/CardArcana";
import {ModalArcana} from "../../components/modal/ModalArcana";

const ArcanasView = ({navigation}: PropsStackNavigation) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Arcanas</Text>
                <View style={{ width: 24 }} />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate("StoryBossesView")}}>
                <Text style={styles.textBosses}>See all the story bosses</Text>
            </TouchableOpacity>
            <View style={styles.containerArcanas}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <CardArcana name={"Magician"} imageArcana={require('../../../../assets/arcana.png')}/>
                </TouchableOpacity>
            </View>
            <ModalArcana arcana={"Magician"} descriptionArcana={"Associated with action, initiative, and intellect. Often linked to energetic or curious characters."} imageArcana={require('../../../../assets/arcana.png')} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

export default ArcanasView;