import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const SplashScreen = () => {
  return (
    <View style={styles.container}> 
      <Image source={require('../../../assets/images/BackgroundIllustration.png')} style={styles.backgroundImage} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: 'contain',
    }
})