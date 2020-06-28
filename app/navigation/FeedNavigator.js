import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetail from "../screens/ListingDetail";
const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetail} />
    </Stack.Navigator>
  );
}
