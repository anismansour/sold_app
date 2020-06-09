import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppText(children) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
