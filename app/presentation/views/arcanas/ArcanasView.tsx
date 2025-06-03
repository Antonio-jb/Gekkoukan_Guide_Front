import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, useWindowDimensions, FlatList} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesArcanas";
import {CardArcana} from "../../components/arcanas/CardArcana";
import {ModalArcana} from "../../components/modal/ModalArcana";
import {ArcanaInterface} from "../../../domain/entities/Arcanas";
import {ArcanaViewModel} from "./ViewModel";

const ArcanasView = ({navigation}: PropsStackNavigation) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedArcana, setSelectedArcana] = useState<ArcanaInterface | null>(null);
    const { arcanas, getArcanas } = ArcanaViewModel();
    const { height } = useWindowDimensions();
    const slicedArcanas = [...arcanas].sort((a, b) => a.id - b.id).slice(0, 23);
    const lastArcanaId = slicedArcanas[slicedArcanas.length - 1]?.id;

    const openArcanaModal = (arcana: ArcanaInterface) => {
        setSelectedArcana(arcana);
        setModalVisible(true);
    };

    useEffect(() => {
        getArcanas();
    }, []);

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
                <FlatList
                    data={slicedArcanas}
                    renderItem={({ item }) => {
                        const isSpoiler = item.id === lastArcanaId;

                        return (
                            <TouchableOpacity
                                style={{ marginBottom: 20 }}
                                onPress={() => openArcanaModal(item)}
                            >
                                <CardArcana
                                    name={item.name}
                                    imageArcana={{ uri: `http://192.168.1.173:8000${item.image}` }}
                                    isSpoiler={isSpoiler}
                                />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    style={[styles.containerCardView, { maxHeight: height * 0.805 }]}
                    initialNumToRender={10}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <Text style={{ textAlign: 'center', padding: 10 }}>There's no more arcanas.</Text>
                    }
                />

            </View>

            {selectedArcana && (
                <ModalArcana
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    name={selectedArcana.name}
                    image={{ uri: `http://192.168.1.173:8000${selectedArcana.image}` }}
                    description={selectedArcana.description}
                />
            )}
        </View>
    )
}

export default ArcanasView;