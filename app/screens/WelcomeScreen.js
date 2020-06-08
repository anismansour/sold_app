import React from "react";
import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";

import colors from "../config/colors";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-w.jpg")} />
        <Text>SELL AND BUY </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.second,
  },
});

export default WelcomeScreen;
