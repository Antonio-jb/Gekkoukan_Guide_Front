import React from 'react';
import {Text, View, Image, TouchableOpacity} from "react-native";
import {ButtomFilter} from "../../components/ButtomFilter";
import {styles} from "./StylesHome";
import {CardCharacter} from "../../components/home/CardCharacter";
import {PropsStackNavigation} from "../../interfaces/StackNav";

const Home = ({ navigation }: PropsStackNavigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/gekkoukan_high_school_emblem.jpg')} style={styles.logo}/>
            </View>
            <View style={styles.buttonContainer}>
                <ButtomFilter onPress={()=>{navigation.navigate('PersonasView')}} text={"Personas"}/>
                <ButtomFilter onPress={()=>{navigation.navigate('SocialLinksView')}} text={"Social Links"}/>
                <ButtomFilter onPress={()=>{}} text={"Tartarus"}/>
                <ButtomFilter onPress={()=>{navigation.navigate('ArcanasView')}} text={"Arcanas"}/>
            </View>
            <View style={styles.charactersContainer}>
                <Text style={styles.textCharacters}>Main characters</Text>
                <TouchableOpacity onPress={() => {}} style={{width: '100%'}}>
                    <CardCharacter
                        name={"Makoto Yuki"}
                        persona={"Orpheus"}
                        imageCharacter={require('../../../../assets/yuki2.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;