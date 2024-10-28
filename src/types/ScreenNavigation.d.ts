interface ScreenNavigation {
  name: keyof RootNav;
  component: React.FC<any> | React.ComponentType<any>;
  options?: import("@react-navigation/native-stack").StackNavigationOptions;
}
