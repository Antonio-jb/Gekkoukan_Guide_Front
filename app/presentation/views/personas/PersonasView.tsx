import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList} from "react-native";
import {CardPersona} from "../../components/persona/CardPersona";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {styles} from "./StylesPersona";
import {PersonasViewModel} from "./ViewModel";
import {PersonasInterface} from "../../../domain/entities/Personas";
import {RenderPersonas} from "./RenderPersonas";

const PersonasView = ({navigation}: PropsStackNavigation) => {
    const {personas, getPersonas, loading} = PersonasViewModel();

    useEffect(() => {
        getPersonas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Personas</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerPersonas}>
                {loading ? (
                    <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
                ): (
                    <FlatList
                        data={personas}
                        renderItem={({item}: {item: PersonasInterface}) => (
                            <RenderPersonas item={item} navigation={navigation}/>
                        )}
                        keyExtractor={(item) => item.external_id.toString()}
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

export default PersonasView;