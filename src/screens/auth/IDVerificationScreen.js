import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const IDVerificationScreen = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Identity Image */}
        <Image
          source={require("../../../assets/images/IdentificationCard.png")}
          style={styles.image}
        />
        {/* Title */}
        <Text style={styles.title}>Scan the front page of ID card</Text>
        <Text style={styles.subTitle}>Please prepare your document</Text>
        {/* Title */}
      </View>
      {/* Next Button */}
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
            Take a photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20, alignItems: "center" }}
          onPress={() => navigation.navigate("IDCardCamera")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#000",
              fontFamily: "eUkrain_Bold",
            }}
          >
            Open gallery
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IDVerificationScreen;

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
  backButton: {
    backgroundColor: "#fff",
    padding: 20,
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
    height: height * 0.3,
    resizeMode: "contain",
  },
});
