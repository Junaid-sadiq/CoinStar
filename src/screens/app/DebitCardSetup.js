import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const DebitCardSetup = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
         <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('IDVerification')}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        </View>
      <View style={styles.container}>
        {/* Back button */}
       
        <ImageBackground
          source={require("../../../assets/images/Illustration.png")}
          style={styles.image}
        >
        {/* Title */}
        <Text style={styles.title}>Setup Debit Card</Text>
        <Text style={styles.subTitle}>Classic and iconic. The original. Make it yours with a custom drawing or stamp.</Text>
        {/* Title */}
      </ImageBackground>
      </View>
      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => navigation.navigate("DebitCardColorSetup")}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontFamily: "eUkrain_Bold",
            }}
          >
        Start
          </Text>
            <Ionicons
                name="arrow-forward"
                size={24}
                color="#fff"
                style={{ marginLeft: 10 }}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DebitCardSetup;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
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
    marginTop: 500,
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
    height: height / 1.5,
    resizeMode: "contain",
  },
});
