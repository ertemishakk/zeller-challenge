import { View } from "react-native";
import { useAppSelector } from "../app/hooks";
import getCustomerTypes from "../selectors/getCustomerTypes";
import SectionTitle from "./SectionTitle";
import CustomerType from "./CustomerType";

const CustomerTypes = () => {
  const types = useAppSelector(getCustomerTypes);

  return (
    <View style={{ margin: 10, padding: 10 }}>
      <SectionTitle title="User Types" />
      {types.map((type, i) => (
        <CustomerType key={i} type={type} />
      ))}
    </View>
  );
};

export default CustomerTypes;
