import React from 'react';
import {useWindowDimensions, View, StyleSheet} from "react-native";
import {TabBar, TabView} from "react-native-tab-view";
import {AppColors} from "../../../theme/AppTheme";
import {StatsPersona} from "./StatsPersona";
import {ResistancesPersona} from "./ResistancesPersona";
import {PersonasInterface} from "../../../../domain/entities/Personas";

interface Props {
    persona: PersonasInterface;
}

export default function TabViewInfo({ persona }: Props) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Stats' },
        { key: 'second', title: 'Resistances' },
    ]);

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'first':
                return (
                    <StatsPersona
                        arcana={persona.arcana}
                        level={persona.level}
                        strength={persona.strength}
                        magic={persona.magic}
                        endurance={persona.endurance}
                        agility={persona.agility}
                        luck={persona.luck}
                    />
                );
            case 'second':
                return (
                    <ResistancesPersona
                        weak={persona.weak && persona.weak.length > 0 ? persona.weak : ["None"]}
                        resists={persona.resists && persona.resists.length > 0 ? persona.resists : ["None"]}
                        reflects={persona.reflects && persona.reflects.length > 0 ? persona.reflects : ["None"]}
                        absorbs={persona.absorbs && persona.absorbs.length > 0 ? persona.absorbs : ["None"]}
                        nullifies={persona.nullifies && persona.nullifies.length > 0 ? persona.nullifies : ["None"]}
                    />
                );
            default:
                return null;
        }
    };

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            activeColor={'#FFFFFF'}
            inactiveColor={'#eaeaea'}
            style={{backgroundColor: '#131B2B'}}
            indicatorStyle={{ backgroundColor: '#4AA8F6', height: 2 }}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={styles.container}
            lazy
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: AppColors.backgroundSecondary,
        borderRadius: 25,
        marginBottom: 20,
    },
});
