import React from "react";
import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-w.jpg")} />
        <Text style={styles.text}>SELL AND BUY </Text>
      </View>
      <View style={styles.ButtonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => console.log("login")}
        />
        <AppButton
          title="Register"
          color="second"
          onPress={() => console.log("register")}
        />
      </View>
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

  ButtonsContainer: {
    padding: 20,
    width: "100%",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
