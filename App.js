import React from "react";
import { View } from "react-native";
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

export default function App() {
  return <ListingsScreen />;
}
