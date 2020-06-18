import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStyles from "../../config/styles";

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}
//[styles.text, style] pass style dynamically to be able to change style from card

export default AppText;
