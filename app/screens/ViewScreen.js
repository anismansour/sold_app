import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/2.jpg")} />
      <View style={styles.icon}>
        <MaterialCommunityIcons name="close" color="white" size={40} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={40}
        />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
