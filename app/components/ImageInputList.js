import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

//collection of image Input

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
