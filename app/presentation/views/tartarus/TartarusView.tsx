import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { PropsStackNavigation } from '../../interfaces/StackNav';
import { styles } from './StylesTartarusView';
import { ModalTartarus } from '../../components/modal/ModalTartarus';
import { TartarusViewModel } from './ViewModel';

interface SectionDetail {
    id: number;
    floor_start: number | null;
    floor_end: number | null;
    personas: string[];
}

interface TartarusSection {
    id: number;
    name: string;
    sections: SectionDetail[];
}

const TartarusView = ({ navigation }: PropsStackNavigation) => {
    const {
        tartarus, // Array de TartarusSection
        tartarusDetail,
        getTartarus,
        getDetailTartarus,
        loading,
    } = TartarusViewModel();

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getTartarus();
    }, []);

    const handleOpenModal = async (id: number) => {
        await getDetailTartarus(id);
        setModalVisible(true);
    };

    const getImageForName = (name: string) => {
        switch (name) {
            case 'Thebel':
                return require('../../../../assets/Thebel.png');
            case 'Arqa':
                return require('../../../../assets/Arqa.png');
            case 'Yabbashah':
                return require('../../../../assets/Yabbashah.png');
            case 'Tziah':
                return require('../../../../assets/Tziah.png');
            case 'Harabah':
                return require('../../../../assets/Harabah.png');
            default:
                return require('../../../../assets/Adamah.png');
        }
    };

    const renderTartarusBlocks = () => {
        return tartarus.map((section: TartarusSection) => (
            <View key={section.id}>
                <Text style={styles.titleText}>{section.name}</Text>
                <TouchableOpacity onPress={() => handleOpenModal(section.id)}>
                    <Image source={getImageForName(section.name)} style={styles.imageFloor} />
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Tartarus</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.containerTartarus}>
                {loading ? <ActivityIndicator size="large" color="#0000ff" /> : renderTartarusBlocks()}
            </View>

            {tartarusDetail && tartarusDetail.sections?.length > 0 && (
                <>
                    {tartarusDetail.sections.map((s, index) => (
                        <ModalTartarus
                            key={s.id}
                            title={index === 0 ? tartarusDetail.name : ''}
                            sectionTitle={
                                s.floor_start != null && s.floor_end != null
                                    ? `Floors ${s.floor_start} - ${s.floor_end}`
                                    : 'Sin información de pisos'
                            }
                            personas={s.personas?.join(', ') ?? 'Sin Personas'}
                            sectionTitle2={''}
                            personas2={''}
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                        />
                    ))}
                </>
            )}
        </ScrollView>
    );
};

export default TartarusView;
