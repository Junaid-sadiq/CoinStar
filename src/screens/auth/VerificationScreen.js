import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const VerificationScreen = ({
  documentsUploaded,
  documentsApproved,
  selfieApproved,
}) => {
  const navigation = useNavigation();
  const [dateOfBirth, setDateOfBirth] = useState("");

  const renderStatusIcon = (isApproved) => {
    if (isApproved === null) {
      // Still loading/waiting for approval
      return <ActivityIndicator size="small" color="#ECF6F1" />;
    }
    if (isApproved) {
      // Approved
      return (
        <>
          <View style={styles.iconBackground}>
            <Ionicons name="checkmark-circle" size={24} color="green" />;
          </View>
        </>
      );
    }
    // Not approved or not yet processed
    return <Ionicons name="time-outline" size={24} color="gray" />;
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/WaitAMinute.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Wait a minute</Text>
        <Text style={styles.subTitle}>
          We analyze your profile verification
        </Text>
      </View>
      <View style={{ marginTop: 250, alignItems: "center" }}>
        <View style={styles.step}>
          <View style={styles.stepIconContainer}>
            <AntDesign name="checkcircleo" size={24} color="black" />
            {/* {renderStatusIcon(documentsUploaded)} */}
          </View>
          <Text style={styles.stepText}>Documents uploaded</Text>
        </View>
        <View style={styles.step}>
          {/* {renderStatusIcon(documentsApproved)} */}
          <View style={styles.stepIconContainer}>
          <AntDesign name="checkcircleo" size={24} color="black" />
          </View>
          <Text style={styles.stepText}>Documents approved</Text>
        </View>
        <View style={styles.step}>
          {/* {renderStatusIcon(selfieApproved)} */}
          <View style={styles.stepIconContainer}>
          <AntDesign name="checkcircleo" size={24} color="black" />
          </View>
          <Text style={styles.stepText}>Selfie approved</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.nextButton]}
          onPress={() => navigation.navigate("CreatePasscode")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontFamily: "eUkrain_Bold",
            }}
          >
            Finish Verification
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationScreen;

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
    height: height * 0.3,
    resizeMode: "contain",
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: '100%',
    marginBottom: 20,
    marginLeft: width * 0.3,
    paddingHorizontal: 20,
  },
  stepIconContainer: {
    backgroundColor: "#ECF6F1",
    padding: 10,
    borderRadius: 90,
    marginRight: 10,
  },
  stepText: {
    fontSize: 15,
    fontFamily: "eUkrain_Medium",
  },
  iconBackground: {
    width: 30,
    height: 30,
    borderRadius: 90,
    backgroundColor: "#ECF6F1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
