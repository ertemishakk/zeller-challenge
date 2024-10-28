import { Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

export const CUSTOMER_SCREEN = "CUSTOMER";

const Customer = () => {
  const { params } = useRoute<RouteProp<RootNav, typeof CUSTOMER_SCREEN>>();
  const { id } = params;

  return <Text></Text>;
};

export default Customer;
