import React from 'react';
import {useWindowDimensions, View, StyleSheet, Text} from "react-native";
import {TabBar, TabView} from "react-native-tab-view";
import {AppColors, AppFonts} from "../../../theme/AppTheme";
import {StatsPersona} from "./StatsPersona";
import {ResistancesPersona} from "./ResistancesPersona";


const FirstRoute = () => {
    return (
        <StatsPersona
            arcana={"Magician"}
            level={8}
            strength={5}
            magic={9}
            endurance={8}
            agility={6}
            luck={4}
        />
    )
}

const SecondRoute= () => {
    return (
        <ResistancesPersona
            weak={"Fire"}
            resists={5}
            reflects={9}
            absorbs={8}
            nullifies={"Ice"}
        />
    )
}

export default function TabViewInfo() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Stats' },
        { key: 'second', title: 'Resistances' },
    ]);

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute />;
            case 'second':
                return <SecondRoute/>;
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
            indicatorStyle={{ backgroundColor: '#4AA8F6', height: 2}}
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
})