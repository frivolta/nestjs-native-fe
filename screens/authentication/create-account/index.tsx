import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import {
  Button,
  CheckBox,
  Input,
  Layout,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";

import { PersonIcon } from "../components/icons";

export const CreateAccount = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <Button size="giant" onPress={() => console.log("pressed")}>
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
  );
};
