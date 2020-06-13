import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 40,
  },
  detailContainer: {
    flexDirection: "column",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.third,
  },
});
