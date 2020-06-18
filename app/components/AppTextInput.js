import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.second}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    paddingTop: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
});
