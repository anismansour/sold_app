import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default class ListingDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <AppText style={styles.title}>Jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          image={require("../assets/anis.jpg")}
          title="Anis"
          subTitle="5 listings"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 350,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.second,
  },
});
