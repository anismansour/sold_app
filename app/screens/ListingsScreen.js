import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
  {
    id: 1,
    title: "jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
