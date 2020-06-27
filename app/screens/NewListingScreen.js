import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppPicker from "../components/AppPicker";
import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm";
import SubmitButton from "../components/SubmitButton";
import AppFormPicker from "../components/AppFormPicker";
import FormImagePicker from "../components/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "select at least 1 image"),
});

const categories = [
  { label: "BMW", value: 1 },
  { label: "MERCEDES", value: 2 },
  { label: "AUDI", value: 3 },
];

export default function NewListingScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          category: null,
          price: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" />
        <FormImagePicker name="images" />
        <AppFormField keyboardType="numeric" name="price" placeholder="Price" />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Choose Brand"
        />
        <AppFormField
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
