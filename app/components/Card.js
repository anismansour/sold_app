import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.container}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    //overflow: "hidden",

    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 60,
    width: "100%",
    height: 200,
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.second,
    fontWeight: "bold",
  },
});
export default Card;
