import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useUser } from "../../context/UserContext";

const UserInfoScreen = ({ navigation }) => {
  const { userData, setUserData } = useUser();

  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");

  /* error states */
  const [emailError, setEmailError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);

  const validationForm = () => {
    let valid = true;
    if (email.trim() === "") {
      setEmailError("Email is required.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (country.trim() === "") {
      setCountryError("Country is required.");
      valid = false;
    } else {
      setCountryError("");
    }
    if (city.trim() === "") {
      setCityError("City is required.");
      valid = false;
    } else {
      setCityError("");
    }
    if (address.trim() === "") {
      setAddressError("Address is required.");
      valid = false;
    } else {
      setAddressError("");
    }
    if (zipcode.trim() === "") {
      setZipCodeError("Zip Code is required.");
      valid = false;
    } else {
      setZipCodeError("");
    }
    return valid;
  }

  const onPressNext = () => {
    if (validationForm()) {
      setUserData({ ...userData, email, country, city, address, zipcode });
      navigation.navigate("IDVerification");
    }
  }

  return (
    <KeyboardAwareScrollView style={styles.wrapper}>
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('UserDateOfBirth')}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>Enter your contact information</Text>
        {/* Input Fields */}
        <View style={styles.textInputContainer}>
          <View style={styles.textFields}>
            <Input
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{marginHorizontal: 10}}
              autoCapitalize="none"
              errorMessage={emailError}
            />
          </View>
          <View style={styles.textFields}>
            <Input
              label="Country"
              value={country}
              onChangeText={(text) => setCountry(text)}
              style={{marginHorizontal: 10}}
              errorMessage={countryError}
            />
          </View>
          <View style={styles.textFields}>
            <Input
              label="City"
              value={city}
              onChangeText={(text) => setCity(text)}
              style={{marginHorizontal: 10}}
              errorMessage={cityError}
            />
          </View>
          <View style={styles.textFields}>
            <Input
              label="Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
              style={{marginHorizontal: 10}}
              errorMessage={addressError}
            />
          </View>
          <View style={styles.textFields}>
            <Input
              label="Zip Code"
              value={zipcode}
              keyboardType="numeric"
              onChangeText={(text) => setZipCode(text)}
              style={{marginHorizontal: 10}}
              errorMessage={zipCodeError}
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
                  email === "" && country === "" && city  === "" && zipcode  === "" && address === "" ? "#BFBFBF" : "#000",
              },
            ]}
            onPress={onPressNext}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
                color: email === "" && country === "" ? "#575757" : "#fff",
              }}
            >
              Next
            </Text>
            <Ionicons
              name="arrow-forward"
              style={{ marginLeft: 20 }}
              size={22}
              color={email === "" && country === "" ? "#575757" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UserInfoScreen;

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
    fontWeight: "bold",
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
    marginTop: 20,
  },
  textFields: {
    marginBottom: 10,
  },
  inputTitle: {
    fontSize: 14,
    color: "#575757",
    marginHorizontal: 20,
    fontFamily: "eUkrain_Reqular",
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
});
