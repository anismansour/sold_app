import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred.');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <Screen>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="account"
              placeholder="Name"
              autoCorrect={false}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
            <ErrorMessage error={errors.name} visible={touched.name} />
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              textContentType="password"
              onBlur={() => setFieldTouched('password')}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

            <SubmitButton title="Register" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({});
