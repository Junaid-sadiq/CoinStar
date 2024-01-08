import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, Touchable, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { useUser } from '../../context/UserContext';

const IDCardCamera = ({ onPictureTaken }) => {
  const { userData, setUserData } = useUser();
  const [hasPermission, setHasPermission] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhotoUri(data.uri); // Set the captured photo URI
      if (onPictureTaken) onPictureTaken(data.uri);
    }
  };

  const onPressNext = () => {
    setUserData({ ...userData, idCardPhoto: photoUri });
    navigation.navigate('UserSelfieScreen');
  }

  return (
    <View style={styles.container}>
    <Camera style={styles.camera} ref={cameraRef}>
      <View style={styles.overlayContainer}>
        <View style={styles.overlayFrame} />
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.text}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </Camera>
    <View style={styles.textContainer}>
    <Text style={styles.title}>Place your ID card in the frame</Text>
    <Text style={styles.subTitle}>Hold up your ID and take a picture. Your entire ID must be in the frame.</Text>
    </View>
    {photoUri && (
         <TouchableOpacity
         style={[
           styles.nextButton,
           {
             backgroundColor: "#000",
           },
         ]}
         onPress={onPressNext}
       >
         <Text
           style={{
             color: "#fff",
             fontSize: 18,
             fontWeight: "bold",
             color: "#fff",
           }}
         >
           Next
         </Text>
         <Ionicons
           name="arrow-forward"
           style={{ marginLeft: 20 }}
           size={22}
           color={"#fff"}
         />
       </TouchableOpacity>    
    )}
    </View>
  );
};

export default IDCardCamera;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayFrame: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  textContainer: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: "eUkrain_Bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#575757",
    fontFamily: "eUkrain_Reqular",
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
  }
});
