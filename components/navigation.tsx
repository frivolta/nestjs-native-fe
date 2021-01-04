import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateAccount } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="CreateAccount" component={CreateAccount} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
);
