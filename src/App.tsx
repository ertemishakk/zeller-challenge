import React from "react";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Amplify, ResourcesConfig } from "aws-amplify";
import Navigation from "./navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import awsconfig from "./utils/aws-config";

Amplify.configure(awsconfig as ResourcesConfig);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
