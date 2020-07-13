import React from "react";
import { StyleSheet, Modal, View } from "react-native";

export default function UploadScreen() {
  return (
    <Modal>
      <View style={styles.container}></View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

//TODO FINISH UPLOAD SCREEN
