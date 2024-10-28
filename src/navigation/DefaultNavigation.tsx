import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";

const DefaultNavigation = ({ screens }: { screens: ScreenNavigation[] }) => {
  const Stack = createNativeStackNavigator<RootNav>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        {screens.map((screen) => {
          return (
            screen.component && (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={{
                  headerTitle: "",
                  headerBackTitle: "",
                  headerTitleAlign: "center",
                  contentStyle: {
                    backgroundColor: "white",
                  },
                  ...screen.options,
                }}
              />
            )
          );
        })}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default DefaultNavigation;
