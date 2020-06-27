//form to handle onchange, onblur and error to the appTextInput

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

import { useFormikContext } from "formik";

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        //icon="email"
        //placeholder="Email"
        // autoCapitalize="none"
        //autoCorrect={false}
        // keyboardType="email-address"
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        //textContentType="emailAddress" //will add the email from the key chain IOS ONLY
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
