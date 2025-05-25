import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import {CardPersona} from "../../components/persona/CardPersona";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesTartarusView";
import {CardSocialLink} from "../../components/social-link/CardSocialLink";
import {ModalArcana} from "../../components/modal/ModalArcana";
import {ModalTartarus} from "../../components/modal/ModalTartarus";

const TartarusView = ({navigation}: PropsStackNavigation) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView  style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Tartarus</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerTartarus}>
                <Text style={styles.titleText}>Thebel</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../assets/Thebel.png')} style={styles.imageFloor}/>
                </TouchableOpacity>
                <Text style={styles.titleText}>Arqa</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../assets/Arqa.png')} style={styles.imageFloor}/>
                </TouchableOpacity>
                <Text style={styles.titleText}>Yabbashah</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../assets/Yabbashah.png')} style={styles.imageFloor}/>
                </TouchableOpacity>
                <Text style={styles.titleText}>Tziah</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../assets/Tziah.png')} style={styles.imageFloor}/>
                </TouchableOpacity>
                <Text style={styles.titleText}>Harabah</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../assets/Harabah.png')} style={styles.imageFloor}/>
                </TouchableOpacity>
                <Text style={styles.titleText}>Adamah</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../../../../assets/Adamah.png')} style={styles.imageFloor}/>
                </TouchableOpacity>
            </View>
            <ModalTartarus title={"Thebel"}
                           sectionTitle={"Floors 23 - 43"}
                           personas={"Pixie, Angel, Silky, Ara Mitama, Forneus"}
                           sectionTitle2={"Este es opcional."}
                           personas2={"Este es opcional, para los bloques de tartarus que se dividen en dos secciones y salen Personas diferentes."}
                           modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </ScrollView>
    )
}

export default TartarusView;