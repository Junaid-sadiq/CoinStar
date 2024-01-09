import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useUser } from "../../context/UserContext";

const EnterPasscodeScreen = () => {
  const navigation = useNavigation();
  const [passcode, setPasscode] = useState("");
  const { userData, setUserData } = useUser();

  console.log("passcode:", userData.passcode)

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };

  const handlePress = async (key) => {
    const newPasscode = passcode.length < 4 ? passcode + key : passcode;
  
    setPasscode(newPasscode);
  
    if (newPasscode.length === 4) {
      const storedPasscode = await AsyncStorage.getItem('passcode');
      // Check if the passcode entered by the user matches the stored passcode
      if (newPasscode === storedPasscode) {
        setUserData({ ...userData, loggedIn: ture });
        // If it matches, navigate to the next screen
        navigation.navigate("NextScreen");
      } else {
        // If it doesn't match, alert the user
        Alert.alert('Incorrect passcode', 'The passcode you entered is incorrect. Please try again.');
        // Reset the entered passcode
        setPasscode("");
      }
    }
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/AbstractBackground.png")}
      style={styles.imageBackground}
    >
      <Image
        source={require("../../../assets/images/Lock.png")}
        style={styles.faceImage}
      />
      <Text style={styles.title}>Enter Passcode</Text>
      <Text style={styles.passcode}>
        {Array.from({ length: 4 }).map((_, index) =>
          index < passcode.length ? "•" : "◦"
        )}
      </Text>
      <View style={styles.keypad}>
        {Array.from({ length: 9 }).map((_, index) => (
          <TouchableOpacity
            key={index + 1}
            style={styles.key}
            onPress={() => handlePress((index + 1).toString())}
          >
            <View style={styles.keyBG}>
              <Text style={styles.keyText}>{index + 1}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.key}>
          <TouchableOpacity onPress={()=> navigation.navigate('FaceID')} style={styles.keyBG}>
            <Image
              source={require("../../../assets/images/FaceID.png")}
              style={styles.faceIdIcon}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.key}>
          <View style={styles.keyBG}>
            <Text style={styles.keyText}>⌫</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          key="0"
          style={styles.key}
          onPress={() => handlePress("0")}
        >
          <View style={styles.keyBG}>
            <Text style={styles.keyText}>0</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomRow}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePasscode')} style={styles.cancel}>
            <Text style={styles.forgotPasscodeText}>Forgot passcode?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EnterPasscodeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  faceImage: {
    width: 64,
    height: 64,
    alignSelf: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 28,
    fontFamily: "eUkrain_Bold",
    color: "#000",
    alignSelf: "center",
    marginTop: 20,
  },
  passcode: {
    fontSize: 68,
    color: "#000",
    alignSelf: "center",
    paddingHorizontal: 2,
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginHorizontal: 35,
  },
  key: {
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  keyBG: {
    backgroundColor: "#F2F2F2",
    width: 60,
    height: 60,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  keyText: {
    fontSize: 30,
  },
  faceIdIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  forgotPasscode: {
    marginTop: 30,
  },
  cancel: {
    marginTop: 30,
  },
  cancelText: {
    color: "#000",
    fontSize: 14,
    fontFamily: "eUkrain_Bold",
  },
  forgotPasscodeText: {
    color: "#4D72F5",
    fontSize: 14,
    fontFamily: "eUkrain_Bold",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  }
});
