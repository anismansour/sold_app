import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function RegisterScreen() {
  return (
    <Screen>
      <AppTextInput icon="account" placeholder="Name" autoCorrect={false} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AppButton title="REGISTER" color="red" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
