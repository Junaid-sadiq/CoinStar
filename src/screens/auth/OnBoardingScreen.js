import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const image1 = require("../../../assets/images/onBoarding1.png");
const image2 = require("../../../assets/images/onBoarding2.png");
const image3 = require("../../../assets/images/onBoarding3.png");

const { width, height } = Dimensions.get("screen");

const Dot = ({ selected }) => {
    return (
      <View
        style={{
          width: selected ? 26 : 6,
          height: selected ? 10 : 6,
          marginHorizontal: 3,
          borderRadius: 5,
          backgroundColor: selected ? '#000' : '#ccc', // Choose visible colors
        }}
      />
    );
  };

const NextButton = ({ isLight, ...props }) => {
  return (
    <TouchableOpacity style={styles.rightButtonWrapper} {...props}>
      <Text
        style={[styles.rightButtonText, { color: isLight ? "#FFF" : "#000" }]}
      >
        Next
      </Text>
    </TouchableOpacity>
  );
};

const SkipButton = ({ isLight, skipLabel, ...props }) => {
  return (
    <TouchableOpacity style={styles.rightButtonWrapper} {...props}>
      <Text
        style={[styles.rightButtonText, { color: isLight ? "#FFF" : "#000" }]}
      >
        {skipLabel}
      </Text>
    </TouchableOpacity>
  );
};

const DoneButton = ({ isLight, ...props }) => {
  return (
    <TouchableOpacity style={styles.rightButtonWrapper} {...props}>
      <Text
        style={[styles.rightButtonText, { color: isLight ? "#FFF" : "#000" }]}
      >
        Done
      </Text>
    </TouchableOpacity>
  );
};

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      DotComponent={Dot}
      NextButtonComponent={NextButton}
      SkipButtonComponent={SkipButton}
      DoneButtonComponent={DoneButton}
      containerStyles={styles.container}
      onSkip={() => navigation.replace("UserName")}
      onDone={() => navigation.replace("UserName")}
      bottomBarColor="#fff"
      bottomBarHeight={110}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={image1} style={styles.image} />,
          title: <Text style={styles.title}>Manage your finances</Text>,
          subtitle: (
            <Text style={styles.subTitle}>
              Forget everything you know about the chaotic world of finance. It
              can be easy.
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={image2} style={styles.image} />,
          title: <Text style={styles.title}>Control your savings</Text>,
          subtitle: (
            <Text style={styles.subTitle}>
              Forget everything you know about the chaotic world of finance. It
              can be easy.
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: <Image source={image3} style={styles.image} />,
          title: <Text style={styles.title}>Easy banking</Text>,
          subtitle: (
            <Text style={styles.subTitle}>
              Forget everything you know about the chaotic world of finance. It
              can be easy.
            </Text>
          ),
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    paddingBottom: 150,
  },
  image: {
    width: width,
    height: height * 0.5 ,
    resizeMode: "contain",
  },
  rightButtonWrapper: {
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 90,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  rightButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    fontFamily: "eUkrain_Reqular",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#575757",
    textAlign: "center",
    fontFamily: "eUkrain_Reqular",
  },
});
