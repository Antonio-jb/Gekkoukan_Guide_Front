import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from "./StylesStoryBosses";
import {PropsStackNavigation} from "../../interfaces/StackNav";

const StoryBossesView = ({navigation}: PropsStackNavigation) => {
    const [spoilerRevealed, setSpoilerRevealed] = useState(false);

    const data = [
        { date: 'May 9', arcana: 'Priestess', boss: 'Priestess' },
        { date: 'June 8', arcana: 'Empress & Emperor', boss: 'Empress & Emperor' },
        { date: 'July 7', arcana: 'Hierophant & Lovers', boss: 'Hierophant & Lovers' },
        { date: 'August 6', arcana: 'Chariot & Justice', boss: 'Chariot & Justice' },
        { date: 'September 5', arcana: 'Hermit', boss: 'Hermit' },
        { date: 'October 4', arcana: 'Fortune & Strength', boss: 'Fortune & Strength' },
        { date: 'November 3', arcana: 'Hanged Man', boss: 'Hanged Man' },
        {
            date: 'December 31',
            arcana: 'Death',
            boss: 'Nyx Avatar',
            isSpoiler: true,
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Story Bosses</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={[styles.row, styles.header]}>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.headerText}>Arcana</Text>
                <Text style={styles.headerText}>Boss Name</Text>
            </View>
            {data.map((item, index) => (
                <View key={index} style={styles.row}>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text style={styles.text}>{item.arcana}</Text>

                    {item.isSpoiler ? (
                        <TouchableOpacity
                            style={[styles.text, styles.spoilerContainer]}
                            onPress={() => setSpoilerRevealed(true)}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.spoilerLabel}>Spoiler</Text>
                            <View style={styles.hiddenTextBox}>
                                {spoilerRevealed ? (
                                    <Text style={styles.revealedText}>{item.boss}</Text>
                                ) : (
                                    <Text style={styles.hiddenText}>Tap to reveal</Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.text}>{item.boss}</Text>
                    )}
                </View>
            ))}
        </ScrollView>
    );
};

export default StoryBossesView;
