import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import {ButtonFilter} from "../../components/buttons/ButtonFilter";
import {styles} from "./StylesHome";
import {CardCharacter} from "../../components/home/CardCharacter";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {ModalCharacter} from "../../components/modal/ModalCharacter";
import {ModalArcana} from "../../components/modal/ModalArcana";

const Home = ({ navigation }: PropsStackNavigation) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/gekkoukan_high_school_emblem.jpg')} style={styles.logo}/>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonFilter onPress={()=>{navigation.navigate('PersonasView')}} text={"Personas"}/>
                <ButtonFilter onPress={()=>{navigation.navigate('SocialLinksView')}} text={"Social Links"}/>
                <ButtonFilter onPress={()=>{navigation.navigate('Tartarus')}} text={"Tartarus"}/>
                <ButtonFilter onPress={()=>{navigation.navigate('ArcanasView')}} text={"Arcanas"}/>
            </View>
            <View style={styles.charactersContainer}>
                <Text style={styles.textCharacters}>Main characters</Text>
                <ScrollView style={{width: "100%", height: "59%",}}>
                    <TouchableOpacity onPress={() =>{navigation.navigate('DetailMainCharacter')}}
                                      style={{width: '100%', marginBottom: 10}}>
                        <CardCharacter
                            name={"Makoto Yuki"}
                            persona={"Orpheus"}
                            imageCharacter={require('../../../../assets/yuki2.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Yukari Takeba"}
                            persona={"Io"}
                            imageCharacter={require('../../../../assets/Yukari.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Junpei Iori"}
                            persona={"Hermes"}
                            imageCharacter={require('../../../../assets/Junpei-Iori.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Akihiko Sanada"}
                            persona={"Polydeuces"}
                            imageCharacter={require('../../../../assets/Akihiko-Sanada.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Mitsuru Kirijo"}
                            persona={"Penthesilea"}
                            imageCharacter={require('../../../../assets/Mitsuru-Kirijo.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Fukka Yamagishi"}
                            persona={"Lucia"}
                            imageCharacter={require('../../../../assets/Fukka.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Aigis"}
                            persona={"Palladion"}
                            imageCharacter={require('../../../../assets/Aigis-Sprite.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Koromaru"}
                            persona={"Cerberus"}
                            imageCharacter={require('../../../../assets/Koromaru.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Ken Amada"}
                            persona={"Nemesis"}
                            imageCharacter={require('../../../../assets/Ken-Amada.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Shinjiro Aragaki"}
                            persona={"Castor"}
                            imageCharacter={require('../../../../assets/Shinjiro-Aragaki.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}
                                      style={{width: '100%', marginVertical: 10}}>
                        <CardCharacter
                            name={"Metis"}
                            persona={"Psyche"}
                            imageCharacter={require('../../../../assets/Metis.png')}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <ModalCharacter image={require('../../../../assets/Yukari-Takeba.png')} descriptionCharacter={"Yukari Takeba is a strong-willed SEES member in Persona 3 Reload. She uses the Persona Io, specializing in wind magic and healing. Though reserved at first, she cares deeply for her friends and struggles with her father's past."} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

export default Home;