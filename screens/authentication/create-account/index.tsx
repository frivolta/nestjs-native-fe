import React from "react";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { authTokenVar } from "../../../apollo";
import { ApolloError, gql, useMutation } from "@apollo/client";
import {
  CreateAccountMutation,
  CreateAccountMutationVariables,
} from "../../../__generated__/CreateAccountMutation";
import { UserRole } from "../../../__generated__/globalTypes";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyleSheet, View } from "react-native";
import { deviceDimensions } from "../../../deviceSizeConfig";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

// Accoun creation form validation schema
const createAccountValidationSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password is too short")
    .max(256, "Password is too long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

// Account creation mutation
export const CREATE_ACCOUNT_MUTATION = gql`
  mutation CreateAccountMutation($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

export const CreateAccount = () => {
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(createAccountValidationSchema),
    mode: "all",
  });
  const onSubmit = (data: FormData) => console.log(data);

  const [
    createAccountMutation,
    { loading, data: createAccountMutationResult, error },
  ] = useMutation<CreateAccountMutation, CreateAccountMutationVariables>(
    CREATE_ACCOUNT_MUTATION
  );

  return (
    <Layout style={styles.layout}>
      <Text category="h1">ShareCoin</Text>
      <Layout style={styles.inputGourp}>
        <Text category="label" style={styles.formLabel}>
          EMAIL:
        </Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Email"
              size="large"
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors && errors.email ? (
          <Text status="danger">{errors.email.message}</Text>
        ) : null}
      </Layout>
      <Layout style={styles.inputGourp}>
        <Text category="label" style={styles.formLabel}>
          PASSWORD:
        </Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Password"
              size="large"
              secureTextEntry={true}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors && errors.password ? (
          <Text status="danger">{errors.password.message}</Text>
        ) : null}
      </Layout>
      <Layout style={styles.inputGourp}>
        <Text category="label" style={styles.formLabel}>
          CONFIRM PASSWORD:
        </Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Confirm Password"
              size="large"
              secureTextEntry={true}
            />
          )}
          name="confirmPassword"
          defaultValue=""
        />
        {errors && errors.confirmPassword ? (
          <Text status="danger">{errors.confirmPassword.message}</Text>
        ) : null}
      </Layout>
      <Layout style={styles.buttonGroup}>
        <Button size="large" onPress={handleSubmit(onSubmit)}>
          SIGN UP
        </Button>
        <Button
          appearance="ghost"
          status="control"
          onPress={() => console.log("pressed")}
        >
          Already have an account? Sign In
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: deviceDimensions.deviceWidth * 0.1,
    paddingRight: deviceDimensions.deviceWidth * 0.1,
  },
  inputGourp: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  formLabel: {
    marginBottom: 16,
  },
  buttonGroup: {
    marginTop: 32,
    alignSelf: "stretch",
  },
});
