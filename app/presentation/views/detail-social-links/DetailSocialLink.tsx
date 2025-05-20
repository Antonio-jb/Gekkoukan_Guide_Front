import React from 'react';
import {Text, View, Image, TouchableOpacity, Animated} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesDetailSocialLinks";
import ScrollView = Animated.ScrollView;


const DetailSocialLink = ({navigation}: PropsStackNavigation) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Aigis</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerInfoSocialLink}>
                <Image source={require('../../../../assets/aigis2.png')} style={styles.imageSocialLink}/>
                <Text style={styles.descriptionSocialLink}>Aigis's Social Link, also known as the Aeon Social Link, in Persona 3 Reload unlocks on January 8th after the events of late December. She does not have any Social Stat requirements to begin her link. You can start the Social Link by speaking to her in the 2F classroom. It's crucial to note that Aigis's Social Link is the last one you can start in the game, so you'll need to plan your time wisely if you want to max it out before the end. </Text>
            </View>
            <View style={styles.containerRanks}>
                <Text style={styles.titleRank}>Ranks</Text>
                <View style={{gap: 5}}>
                    <Text style={styles.subtitleRank}>Rank 1:</Text>
                    <View style={styles.containerRank}>
                        <Image source={require('../../../../assets/item.png')} style={styles.iconItem}/>
                        <Text style={styles.descriptionRank}>No specific response affects your relationship.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailSocialLink;