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
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

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
          setFieldValue,
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
            <AppPicker //todo fix appPicker   display selectedItem not working
              icon="apps"
              placeholder="Choose "
              items={categories}
              selectedItem={"category"}
              onSelectedItem={(item) => setFieldValue(item)}
            />
            <ErrorMessage
              error={errors["category"]}
              visible={touched["category"]}
            />

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
