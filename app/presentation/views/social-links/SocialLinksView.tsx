import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesSocialLinks";
import {SocialLinkViewModel} from "./ViewModel";
import {SocialLinkInterface} from "../../../domain/entities/SocialLink";
import {RenderSocialLinks} from "./RenderSocialLinks";

const SocialLinksView = ({navigation}: PropsStackNavigation) => {
    const {socialLinks, getSocialLinks, loading} = SocialLinkViewModel();

    useEffect(() => {
        getSocialLinks();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Social Links</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerSocialLinks}>
                {loading ? (
                    <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
                ) : (
                    <FlatList
                        data={socialLinks}
                        renderItem={({item}: {item: SocialLinkInterface}) => (
                            <RenderSocialLinks item={item} navigation={navigation}/>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        initialNumToRender={10}
                        windowSize={10}
                        ListFooterComponent={
                            <View style={{ paddingVertical: 10 }}>
                                <Text style={{ textAlign: 'center', color: 'white' }}>No hay más elementos</Text>
                            </View>
                        }
                    />
                )}
            </View>
        </View>
    )
}

export default SocialLinksView;
