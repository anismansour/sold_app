import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  //const [imageUri, setImageUri] = useState(); //to pass the uri of the image selected  --- can use it if used from appJs
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) alert("you need to enable access to library");
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert("Delete", "you sure ?", [
        { text: "yes", onPress: () => onChangeImage(null) },
        { text: "no" },
      ]);
  };

  const selectImage = async () => {
    try {
      // ImagePicker.launchImageLibraryAsync()  bring the image window from where the user can select an image
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, //can select images only
        quality: 0.5, //to avoid large upload
      });

      //control and space gives all the properties of the launchImage.. ()

      //result property has several properties on documentation ==>
      //result.cancelled is boolean property that return true if user does not select an image
      //result.uri return the uri of the image selected
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error from selectImage");
    }
  };
  //to display the image selected get the uri from result of selectImage
  //function to pass it will use useState

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size="50"
            color={colors.white}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
