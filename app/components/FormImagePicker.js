import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageInputList from "./ImageInputList";

import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
