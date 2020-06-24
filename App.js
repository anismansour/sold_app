import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, TextInput, Switch, Image } from "react-native";
import * as Permissions from "expo-permissions";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewScreen from "./app/screens/ViewScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetail from "./app/screens/ListingDetail";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import NewListingScreen from "./app/screens/NewListingScreen";

export default function App() {
  const [imageUri, setImageUri] = useState(); //to pass the uri of the image selected
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) alert("you need to enable access to library");
  };

  useEffect(() => {
    return () => {
      requestPermission();
    };
  }, []);
  const selectImage = async () => {
    try {
      // ImagePicker.launchImageLibraryAsync()  bring the image window from where the user can select an image
      const result = await ImagePicker.launchImageLibraryAsync();
      //result property has several properties on documentation ==>
      //result.cancelled is boolean property that return true if user does not select an image
      //result.uri return the uri of the image selected
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("error from selectImage");
    }
  };
  //to display the image selected get the uri from result of selectImage
  //function to pass it will use useState

  return (
    <Screen>
      <AppButton title="Select Image" onPress={selectImage} color={"black"} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
