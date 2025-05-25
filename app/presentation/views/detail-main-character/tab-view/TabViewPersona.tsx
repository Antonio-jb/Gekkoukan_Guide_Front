import React from 'react';
import {useWindowDimensions, View, StyleSheet, Text} from "react-native";
import {TabBar, TabView} from "react-native-tab-view";
import {AppColors, AppFonts} from "../../../theme/AppTheme";
import {Charm} from "./Charm";
import {Academics} from "./Academics";
import {Courage} from "./Courage";

const FirstRoute= () => {
    return (
        <Academics
            hint1={" Arcade gives best value — Prioritize arcade for the highest internal stat gains, even if feedback looks the same."}
            hint2={" Knowledge Milestones — Aim for: Lv 3 (May exams), Lv 4 (July), Lv 5 (October), Lv 6 (early December)."}
            hint3={" Don't overinvest early — After Lv 4, you can coast until late game. Focus on SEES study sessions and seafood specials."}
        />
    )
}

const SecondRoute = () => {
    return (
        <Charm
            hint1={" SEES hangouts boost charm passively — You'll naturally reach Lv 6 over time if you focus on these."}
            hint2={" No rush needed — Only Yukari needs Charm Lv 6."}
            hint3={" Night activities stack well — Passive charm points make it easy to max out without grinding."}
        />
    )
}

const ThirdRoute= () => {
    return (
        <Courage
            hint1={" Same passive boost as Charm — SEES hangouts at night push this stat too."}
            hint2={" No need to rush — Like Charm, Courage will max passively through normal play."}
            hint3={" Only needed for certain social links — Focus when specific characters require high Courage."}
        />
    )
}

export default function TabViewInfo() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Academics' },
        { key: 'second', title: 'Charm' },
        { key: 'third', title: 'Courage' },
    ]);

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute />;
            case 'second':
                return <SecondRoute/>;
            case 'third':
                return <ThirdRoute/>;
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