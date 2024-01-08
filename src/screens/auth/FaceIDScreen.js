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

import { useUser } from "../../context/UserContext";

const FaceIDScreen = () => {
  const navigation = useNavigation();
  const [passcode, setPasscode] = useState("");
  const { userData, setUserData } = useUser();

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };
  const handlePress = (key) => {
    if (passcode.length < 4) {
      setPasscode(passcode + key);
    }
    if (passcode.length === 3) {
      setUserData({ ...userData, passcode: passcode + key });
      navigation.navigate("HomeScreen");
    }
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/AbstractBackground_2.png")}
      style={styles.imageBackground}
    >
      <Image
        source={require("../../../assets/images/FaceID.png")}
        style={styles.faceID}
      />
      <Text style={styles.title}>Enter with face ID?</Text>
      <Text style={styles.subTitle}>Would you like to enter the application with face ID</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => navigation.navigate("UserSelfieScreen")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontFamily: "eUkrain_Bold",
            }}
          >
            Allow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20, alignItems: "center" }}
          onPress={() => navigation.navigate("EnterPasscode")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              fontFamily: "eUkrain_Bold",
            }}
          >
            Maybe later
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FaceIDScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  faceID: {
    width: 64,
    height: 64,
    alignSelf: "center",
    marginTop: 200,
  },
  title: {
    fontSize: 28,
    fontFamily: "eUkrain_Bold",
    color: "#000",
    alignSelf: "center",
    marginTop: 20,
  },
    subTitle: {
    fontSize: 18,
    fontFamily: "eUkrain_Regular",
    color: "#000",
    alignSelf: "center",
    marginHorizontal: 30,
    textAlign: "center",
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
  nextButton: {
    marginTop: 60,
    alignItems: "flex-end",
    flexDirection: "row",
    marginHorizontal: 20,
    height: 50,
    borderRadius: 90,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
