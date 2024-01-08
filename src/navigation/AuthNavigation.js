import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/auth/SplashScreen";
import OnBoardingScreen from "../screens/auth/OnBoardingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import UserNameScreen from "../screens/auth/UserNameScreen";
import UserDateOfBirthScreen from "../screens/auth/UserDateOfBirthScreen";
import UserInfoScreen from "../screens/auth/UserInfoScreen";
import IDVerificationScreen from "../screens/auth/IDVerificationScreen";
import IDCardCamera from "../screens/auth/IDCardCamera";
import UserSelfieScreen from "../screens/auth/UserSelfieScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";
import CreatePasscodeScreen from "../screens/auth/CreatePasscodeScreen";
import FaceIDScreen from "../screens/auth/FaceIDScreen";
import EnterPasscodeScreen from "../screens/auth/EnterPasscodeScreen";


const Stack = createNativeStackNavigator();
const AuthNavigation = ({isFirstLaunch}) => {
  return (
    <Stack.Navigator
      initialRouteName={isFirstLaunch ? "Onboarding" :  "FaceID"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="UserName" component={UserNameScreen} />
      <Stack.Screen name="UserDateOfBirth" component={UserDateOfBirthScreen} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
      <Stack.Screen name="IDVerification" component={IDVerificationScreen} />
      <Stack.Screen name="IDCardCamera" component={IDCardCamera} />
      <Stack.Screen name="UserSelfieScreen" component={UserSelfieScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="CreatePasscode" component={CreatePasscodeScreen} />
      <Stack.Screen name="EnterPasscode" component={EnterPasscodeScreen} />
      <Stack.Screen name="FaceID" component={FaceIDScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
