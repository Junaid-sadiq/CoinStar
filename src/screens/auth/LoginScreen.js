import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
        <Text style={{color: '#fff'}}>Go to OnBoarding</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
})