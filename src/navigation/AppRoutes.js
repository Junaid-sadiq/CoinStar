import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import OnBoardingScreen from "../screens/auth/OnBoardingScreen";
import { useUser } from "../context/UserContext";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const {userData, setUserData} = useUser();
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, since we're just setting it
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return <ActivityIndicator size="large" color="green" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />;  
  }
  return (
    <NavigationContainer>
      <AppNavigation />
       {/* {userData.loggedIn ? (
        <AppNavigation />
      ) : (
        <AuthNavigation isFirstLaunch={isFirstLaunch} />
      )} */}
    </NavigationContainer>
  );
};

export default AppRoutes;
