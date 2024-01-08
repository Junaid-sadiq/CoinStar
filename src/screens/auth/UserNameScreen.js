import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from 'react-native-elements';

import { useUser } from "../../context/UserContext";

const UserNameScreen = ({ navigation }) => {
  const { userData, setUserData } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const validateForm = () => {
    let valid = true;
    if (firstName.trim() === "") {
      setFirstNameError("First name is required.");
      valid = false;
    } else {
      setFirstNameError("");
    }
    if (lastName.trim() === "") {
      setLastNameError("Last name is required.");
      valid = false;
    } else {
      setLastNameError("");
    }
    return valid;
  };

  const OnPressNext = () => {
    if (validateForm()) {
      setUserData({ ...userData, firstName, lastName });
      navigation.navigate("UserDateOfBirth");
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Title */}
<Text style={styles.title}>What is your name?</Text>
        <Text style={styles.subTitle}>Please enter your legal name</Text>        
        {/* Input Fields */}
        <View style={styles.textInputContainer}>
          <View style={styles.textFields}>
            <Input
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              label="First name"
              errorMessage={firstNameError}
            />
          </View>
          <View style={styles.textFields}>
            <Input 
            label="Last name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            errorMessage={lastNameError}
            />
          </View>
        </View>
        {/* Next Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              {
                backgroundColor:
                  firstName === "" && lastName === "" ? "#BFBFBF" : "#000",
              },
            ]}
            disabled={firstName === "" && lastName === ""}
            onPress={OnPressNext}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                color: firstName === "" && lastName === "" ? "#575757" : "#fff",
              }}
            >
              Next
            </Text>
            <Ionicons
              name="arrow-forward"
              style={{ marginLeft: 20 }}
              size={22}
              color={firstName === "" && lastName === "" ? "#575757" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserNameScreen;

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
    marginTop: 60,
  },
  textFields: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  inputTitle: {
    fontSize: 15,
    color: "#575757",
    marginHorizontal: 20,
    marginBottom: 4,
    fontFamily: "eUkrain_Reqular",
  },
  input: {
    marginHorizontal: 20,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 10,
    paddingHorizontal: 10,
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
});
