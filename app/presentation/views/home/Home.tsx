import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList, Dimensions, useWindowDimensions} from "react-native";
import { ButtonFilter } from "../../components/buttons/ButtonFilter";
import { styles } from "./StylesHome";
import { CardCharacter } from "../../components/home/CardCharacter";
import { PropsStackNavigation } from "../../interfaces/StackNav";
import { ModalCharacter } from "../../components/modal/ModalCharacter";
import { CharacterInterface } from "../../../domain/entities/Characters";
import {useCharacterViewModel} from "./ViewModel";

const Home = ({ navigation }: PropsStackNavigation) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterInterface | null>(null);
    const { characters, getCharacters } = useCharacterViewModel();
    const { height } = useWindowDimensions();

    const openCharacterModal = (character: CharacterInterface) => {
        setSelectedCharacter(character);
        setModalVisible(true);
    };

    useEffect(() => {
        getCharacters();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/gekkoukan_high_school_emblem.jpg')} style={styles.logo} />
            </View>

            <View style={styles.buttonContainer}>
                <ButtonFilter onPress={() => navigation.navigate('PersonasView')} text={"Personas"} />
                <ButtonFilter onPress={() => navigation.navigate('SocialLinksView')} text={"Social Links"} />
                <ButtonFilter onPress={() => navigation.navigate('Tartarus')} text={"Tartarus"} />
                <ButtonFilter onPress={() => navigation.navigate('ArcanasView')} text={"Arcanas"} />
            </View>

            <View style={styles.charactersContainer}>
                <Text style={styles.textCharacters}>Main characters</Text>

                <FlatList
                    data={[...characters].sort((a, b) => a.id - b.id).slice(0, 10)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ marginBottom: 30 }}
                            onPress={() => openCharacterModal(item)}
                        >
                            <CardCharacter
                                name={item.name}
                                persona={item.persona ?? "Unknown"}
                                imageCharacter={{ uri: `http://10.0.2.2:8000${item.image}` }}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={[styles.containerCardView, { maxHeight: height * 0.525 }]}
                    initialNumToRender={10}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DetailMainCharacter')}
                            style={{ width: '100%', marginBottom: 30 }}
                        >
                            <CardCharacter
                                name={"Makoto Yuki"}
                                persona={"Orpheus"}
                                imageCharacter={require('../../../../assets/yuki2.png')}
                            />
                        </TouchableOpacity>
                    }
                    ListFooterComponent={
                        <Text style={{ textAlign: 'center', padding: 10 }}>There's no more characters.</Text>
                    }
                />

            </View>

            {selectedCharacter && (
                <ModalCharacter
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    name={selectedCharacter.name}
                    image={{ uri: `http://10.0.2.2:8000${selectedCharacter.fullImage}` }}
                    descriptionCharacter={selectedCharacter.description}
                />
            )}
        </View>
    );
};

export default Home;
