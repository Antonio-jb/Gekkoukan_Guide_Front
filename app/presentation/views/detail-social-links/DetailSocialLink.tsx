import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Animated, ActivityIndicator } from "react-native";
import { styles } from "./StylesDetailSocialLinks";
import ScrollView = Animated.ScrollView;
import { useNavigation, useRoute } from "@react-navigation/native";
import { DetailSocialLinkViewModel } from "./ViewModel";
import { RootStackParamlist } from "../../../../App";
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamlist, 'DetailSocialLink'>;

const DetailSocialLink = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id } = route.params as { id: number };

    const { socialLinks, getDetailSocialLinks, loading } = DetailSocialLinkViewModel();

    useEffect(() => {
        getDetailSocialLinks(id);
    }, []);

    if (loading || !socialLinks) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{socialLinks.name}</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.containerInfoSocialLink}>
                {socialLinks.image_body && (
                    <Image source={{ uri: `http://10.0.2.2:8000${socialLinks.image_body}` }} style={styles.imageSocialLink} />
                )}
                <Text style={styles.descriptionSocialLink}>{socialLinks.description}</Text>
            </View>

            <View style={styles.containerRanks}>
                <Text style={styles.titleRank}>Ranks</Text>
                {socialLinks.ranks.map((rank) => (
                    <View key={rank.id}>
                        <Text style={styles.subtitleRank}>Rank {rank.level}:</Text>
                        {rank.opciones.map((opcion) => (
                            <View style={styles.containerRank} key={opcion.id}>
                                <Image source={require('../../../../assets/item.png')} style={styles.iconItem} />
                                <Text style={styles.descriptionRank}>{opcion.text}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default DetailSocialLink;
