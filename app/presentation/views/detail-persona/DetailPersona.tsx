import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesDetailPersona";
import TabViewInfo from "./tab-view/TabViewPersona";
import {useNavigation, useRoute} from "@react-navigation/native";
import {DetailSocialLinkViewModel} from "../detail-social-links/ViewModel";
import {DetailPersonaViewModel} from "./ViewModel";

const DetailPersona = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { external_id } = route.params as { external_id: number };

    const { persona, getDetailPersona, loading } = DetailPersonaViewModel();

    useEffect(() => {
        getDetailPersona(external_id);
    }, []);

    if (loading || !persona) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{persona.name}</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerInfoPersona}>
                <Image source={{uri: persona.image}} style={styles.imagePersona}/>
                <Text style={styles.descriptionPersona}>{persona.description}</Text>
            </View>
            <View style={styles.containerTabView}>
                <TabViewInfo persona={persona} />
            </View>
        </View>
    )
}

export default DetailPersona;