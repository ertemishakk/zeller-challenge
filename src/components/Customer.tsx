import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { CUSTOMER_SCREEN } from "../screens/Customer";
import Button from "./Button";
import lodash from "lodash";

const Customer = ({ customer }: { customer: Customer }) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Button
      containerStyle={styles.container}
      onPress={() => navigation.navigate(CUSTOMER_SCREEN, { id: customer.id })}
    >
      <View style={styles.boxContainer}>
        <Text style={{ fontWeight: "bold", color: "rgb(36, 124, 209)" }}>
          {customer.name[0]}
        </Text>
      </View>
      <View style={{ marginHorizontal: 5 }}>
        <Text>{customer.name}</Text>
        <Text style={styles.roleType}>
          {lodash.upperFirst(customer.role.toLowerCase())}
        </Text>
      </View>
    </Button>
  );
};

export default Customer;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  boxContainer: {
    backgroundColor: "rgb(232, 243, 251)",
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  roleType: {
    marginTop: 5,
    color: "grey",
  },
});
