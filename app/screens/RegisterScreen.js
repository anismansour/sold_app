import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="account"
              placeholder="Name"
              autoCorrect={false}
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
            />
            <ErrorMessage error={errors.name} visible={touched.name} />
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              textContentType="password"
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

            <AppButton title="REGISTER" color="red" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({});
