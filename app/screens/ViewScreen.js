import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function ViewScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/2.jpg")} />
      <View style={styles.icon}></View>
      <View style={styles.deleteIcon}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "90%",
    top: 100,
    flex: 0.85,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.second,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
