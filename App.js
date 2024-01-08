import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./src/screens/auth/SplashScreen";

import AppRoutes from "./src/navigation/AppRoutes";
import { ActivityIndicator } from "react-native";
import { UserProvider } from "./src/context/UserContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [splash, setSplash] = useState(true);
  let [fontsLoaded] = useFonts({
    eUkrain_Reqular: require("./assets/fonts/e-Ukraine-Regular.otf"),
    eUkrain_Bold: require("./assets/fonts/e-Ukraine-Bold.otf"),
    eUkrain_Light: require("./assets/fonts/e-Ukraine-Light.otf"),
    eUkrain_Medium: require("./assets/fonts/e-Ukraine-Medium.otf"),
    eUkrain_Thin: require("./assets/fonts/e-Ukraine-Thin.otf"),
    eUkrain_UltraLight: require("./assets/fonts/e-Ukraine-UltraLight.otf"),
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        setTimeout(async () => {
          await SplashScreen.hideAsync();
          setSplash(false);
        }, 2000); // Keep the splash screen for 2 seconds after fonts are loaded
      }
    }

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="green" style={{ flex: 1 }} />;
  }

  // When the app is ready, render the main content
  return (
    <UserProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        {splash ? <Splash /> : <AppRoutes />}
      </SafeAreaProvider>
    </UserProvider>
  );
}
