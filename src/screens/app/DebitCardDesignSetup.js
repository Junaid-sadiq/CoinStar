import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card } from "react-native-elements";

const colors = ['#004EE4', '#000000', '#70BA95', '#FDFF96', '#FAFAFB'];

function luminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
        : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  
  function textColorBasedOnBgColor(bgColor) {
    // Explicit exceptions for certain colors
    if (bgColor.toUpperCase() === '#FDFF96') { // If the background color is yellow
      return '#Fa6'; // Use black text
    } else if (bgColor.toUpperCase() === '#70BA95') { // If the background color is white
        return '#fff'; // Use black text
    }
  
    // For other colors, use luminance to determine text color
    const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hex to decimal
    const g = parseInt(color.substring(2, 4), 16); // hex to decimal
    const b = parseInt(color.substring(4, 6), 16); // hex to decimal
    return luminance(r, g, b) > 0.179 ? '#000000' : '#ffffff';
  }

const DebitCardDesignSetup = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const CardPreview = ({ color }) => {
    const cardTextColor = textColorBasedOnBgColor(color);
    return (
      <View style={[styles.cardPreview, { backgroundColor: color }]}>
        <Text style={[styles.cardText, { color: cardTextColor }]}>Debit</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.screenTitle}>Setup Card</Text>
      </View>
      <Text style={styles.topTitle}>Select design option for your card</Text>
      <CardPreview color={selectedColor} />
      <View style={styles.colorOptions}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorOption, { borderColor: selectedColor === color ? '#000' : 'transparent' }]}
            onPress={() => setSelectedColor(color)}
          >
            <View style={[styles.colorCircle, { backgroundColor: color }]} />
          </TouchableOpacity>
        ))}
      </View>
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
        Continue
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

export default DebitCardDesignSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    width: "100%",
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 18,
    color: "#000",
    fontFamily: "eUkrain_Bold",
    marginRight: 120,
  },
  topTitle: {
    paddingTop: 30,
    fontSize: 32,
    color: "#000",
    fontFamily: "eUkrain_Bold",
    marginTop: 10,
    textAlign: "center",
    marginBottom: 20
  },
  cardPreview: {
    marginTop: 10,
    marginHorizontal: 20,
    width: 343,
    height: 218,
    borderRadius: 20,
    marginBottom: 32,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 16,
    fontFamily: "eUkrain_Bold",
  },
  colorOptions: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  colorOption: {
    padding: 2,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 10,
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
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
