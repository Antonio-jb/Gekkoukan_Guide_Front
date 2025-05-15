import React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./app/presentation/views/home/Home";
import {AppColors} from "./app/presentation/theme/AppTheme";
import {useFonts} from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-context";
import PersonasView from "./app/presentation/views/personas/PersonasView";
import SocialLinksView from "./app/presentation/views/social-links/SocialLinksView";
import ArcanasView from "./app/presentation/views/arcanas/ArcanasView";

const Stack = createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
  Home: undefined,
  PersonasView: undefined,
  SocialLinksView: undefined,
  ArcanasView: undefined,
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
    'Orbitron-SemiBold': require('./assets/fonts/Orbitron-SemiBold.ttf'),
    'Orbitron-Medium': require('./assets/fonts/Orbitron-Medium.ttf'),
    'Orbitron-Regular': require('./assets/fonts/Orbitron-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} color={AppColors.primary}></ActivityIndicator>
  }

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Home"} component={Home} />
            <Stack.Screen name={"PersonasView"} component={PersonasView} />
            <Stack.Screen name={"SocialLinksView"} component={SocialLinksView} />
            <Stack.Screen name={"ArcanasView"} component={ArcanasView} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
