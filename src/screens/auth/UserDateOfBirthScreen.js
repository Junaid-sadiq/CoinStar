import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useUser } from "../../context/UserContext";
import { Input } from "react-native-elements";

const UserDateOfBirthScreen = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { userData, setUserData } = useUser();
  const [dateOfBirthError, setDateOfBirthError] = useState('');
  
  const handleDateChange = (text) => {
    const newText = text.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
    let formattedText = newText;

    // Add slashes at the appropriate places
    if (newText.length > 2 && newText.length <= 4)
      formattedText = newText.substring(0, 2) + '/' + newText.substring(2);
    if (newText.length > 4)
      formattedText = newText.substring(0, 2) + '/' + newText.substring(2, 4) + '/' + newText.substring(4);

    setDateOfBirth(formattedText); // Update state
  };

  const validateForm = () => {
    if (!dateOfBirth.trim()) {
      setDateOfBirthError("Date of birth is required.");
      return false;
    }
    setDateOfBirthError("");
    return true;
  };

  const onPressNext = () => {
    if (validateForm()) {
      setUserData({ ...userData, dateOfBirth });
      navigation.navigate("UserInfo");
    }
  }
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
        {/* Title */}
        <Text style={styles.title}>When were you born?</Text>
        <Text style={styles.subTitle}>Please enter your date of birth</Text>
        {/* Input Fields */}
        <View style={styles.textInputContainer}>
            <Input
              label="Date of Birth"
              placeholder="MM/DD/YYYY"
              value={dateOfBirth}
              onChangeText={handleDateChange}
              keyboardType="numeric"
              maxLength={10}
              errorMessage={dateOfBirthError}
            />
          </View>
        </View>
        {/* Next Button */}
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton,
                 {backgroundColor: dateOfBirth === "" ? "#BFBFBF" : "#000"}
          ]}
          onPress={onPressNext}
          disabled={!dateOfBirth}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", color: dateOfBirth === "" ? "#575757" : "#fff" }}>
            Next
          </Text>
          <Ionicons name="arrow-forward" style={{marginLeft: 20}} size={22} color={dateOfBirth === "" ? "#575757" : "#fff"} />
        </TouchableOpacity>
        </View>
      </View>
  );
};

export default UserDateOfBirthScreen;

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
    fontSize: 28,
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
    marginTop: 40,
    marginHorizontal: 10,
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
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  nextButton: {
    alignItems:'flex-end',
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 50,
    borderRadius: 90,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  }
});
