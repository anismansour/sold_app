import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-w.jpg")} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress" //will add the email from the key chain IOS ONLY
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password" //will add the email from the key chain IOS ONLY
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton
        title="Login"
        onPress={() => console.log("email" + email, password)}
        color="red"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
