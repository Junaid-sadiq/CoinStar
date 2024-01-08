import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const UserSelfieScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Back button */}
        <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('IDVerification')}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Verification')}
        >
          <Text style={styles.topText}>Continue later</Text>
        </TouchableOpacity>
        </View>
        {/* Identity Image */}
        <Image
          source={require("../../../assets/images/TakeYourPic.png")}
          style={styles.image}
        />
        {/* Title */}
        <Text style={styles.title}>Take a selfie</Text>
        <Text style={styles.subTitle}>We use your selfie to compare with your passport photo</Text>
        {/* Title */}
      </View>
      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => navigation.navigate("Verification")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontFamily: "eUkrain_Bold",
            }}
          >
        Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserSelfieScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#fff",
    padding: 20,
  },
  topText: {
    fontSize: 18,
    color: "#4D72F5",
    marginTop: 10,
    textAlign: "center",
    fontFamily: "eUkrain_Bold",
  },
  title: {
    fontSize: 30,
    color: "#000",
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "center",
    fontFamily: "eUkrain_Bold",
  },
  subTitle: {
    fontSize: 14,
    color: "#575757",
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "center",
    fontFamily: "eUkrain_Reqular",
  },
  textInputContainer: {
    marginTop: 20,
  },
  input: {
    marginHorizontal: 20,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.6)",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  nextButton: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginHorizontal: 20,
    height: 50,
    borderRadius: 90,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: height * 0.4,
    resizeMode: "contain",
  },
});
