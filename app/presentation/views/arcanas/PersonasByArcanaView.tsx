import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { CardPersona } from "../../components/persona/CardPersona";
import { PersonasByArcanaViewModel } from "./PersonasByArcanaViewModel";
import { PropsStackNavigation } from "../../interfaces/StackNav";
import { styles } from "./StylesArcanas";

type PersonasByArcanaRouteParams = {
    PersonasByArcanaView: {
        arcanaId: number;
    };
};

export const PersonasByArcanaView = ({ navigation }: PropsStackNavigation) => {
    const route = useRoute<RouteProp<PersonasByArcanaRouteParams, 'PersonasByArcanaView'>>();
    const { arcanaId } = route.params;
    const { personas, loading } = PersonasByArcanaViewModel(arcanaId);

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Personas</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={styles.containerArcanas}>
                {loading ? (
                    <Text style={{ textAlign: 'center', padding: 10, color: "white" }}>Loading...</Text>
                ) : (
                <FlatList
                    data={personas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (

                        <View style={{ marginBottom: 30 }}>
                        <CardPersona
                            name={item.name}
                            arcana={item.arcana}
                            imagePersona={{uri: item.image }}
                        />
                        </View>
                    )}
                    ListEmptyComponent={<Text style={{ textAlign: 'center', padding: 10, color: "white" }}>No personas found for this Arcana.</Text>}
                />
                )}
            </View>
        </View>
    );
};
