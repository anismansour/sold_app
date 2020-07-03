import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import { NavigationContainer } from "@react-navigation/native";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator animating={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
