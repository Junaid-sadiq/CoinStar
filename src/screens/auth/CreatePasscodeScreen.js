import React, { useState } from "react";
import {
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

const CreatePasscodeScreen = () => {
  const navigation = useNavigation();
  const [passcode, setPasscode] = useState("");
  const { userData, setUserData } = useUser();

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };
  const handlePress = async (key) => {
    if (passcode.length < 4) {
      setPasscode(passcode + key);
    }
    if (passcode.length === 3) {
        const newPasscode = passcode + key;
      setUserData({ ...userData, passcode: newPasscode });
      await AsyncStorage.setItem('passcode', newPasscode);
      navigation.navigate("FaceID");
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
      <Text style={styles.title}>Create Passcode</Text>
      <Text style={styles.passcode}>
        {Array.from({ length: 4 }).map((_, index) =>
          index < passcode.length ? "•" : "◦"
        )}
      </Text>
      <View style={styles.keypad}>
        {Array.from({ length: 10 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => handlePress(index.toString())}
          >
            <View style={styles.keyBG}>
              <Text style={styles.keyText}>{index}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleDelete} style={styles.key}>
          <View style={styles.keyBG}>
            <Text style={styles.keyText}>⌫</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CreatePasscodeScreen;

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
    padding:10
  },
  keyText: {
    fontSize: 30,
  },
});
