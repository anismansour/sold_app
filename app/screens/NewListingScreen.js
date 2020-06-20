import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Tile"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
let name = "";
const categories = [
  { label: "BMW", value: 1 },
  { label: "MERCEDES", value: 2 },
  { label: "AUDI", value: 3 },
];

export default function NewListingScreen() {
  return (
    <Screen>
      <Formik
        initialValues={{
          title: "",
          category: null,
          price: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          values,
        }) => (
          <>
            <AppTextInput
              placeholder=" TITLE"
              MaxLength={100}
              autoCorrect={true}
              onChangeText={handleChange("title")}
              onBlur={() => setFieldTouched("title")}
            />
            <ErrorMessage error={errors.title} visible={touched.title} />
            {/* <AppPicker
              name="category"
              placeholder="choose Brand"
              items={categories}
              onSelectedItem={(item) => setFieldValue(name, item)}
              selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} /> */}

            <AppTextInput
              placeholder="PRICE"
              onChangeText={handleChange("price")}
              onBlur={() => setFieldTouched("price")}
            />
            <ErrorMessage error={errors.price} visible={touched.price} />

            <AppTextInput
              placeholder="DESCRIPTION"
              autoCorrect={true}
              autoCapitalize="on"
              onChangeText={handleChange("description")}
              onBlur={() => setFieldTouched("description")}
            />
            <ErrorMessage
              error={errors.description}
              visible={touched.description}
            />

            <AppButton title="POST" color="red" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({});
