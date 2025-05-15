import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {CardPersona} from "../../components/persona/CardPersona";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesSocialLinks";
import {CardSocialLink} from "../../components/social-link/CardSocialLink";

const SocialLinksView = ({navigation}: PropsStackNavigation) => {
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
                <TouchableOpacity onPress={() => {}}>
                    <CardSocialLink name={"Aigis"} imageSocialLink={require('../../../../assets/aigis.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SocialLinksView;