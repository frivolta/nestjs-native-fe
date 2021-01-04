import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as EvaIconsPack from "@ui-kitten/eva-icons";
import { AppNavigator } from "./components/navigation";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack.EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);
