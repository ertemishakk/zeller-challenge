import { StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from "./Button";
import { setRole } from "../reducers/role";

const CustomerType = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.role);

  return (
    <Button
      containerStyle={styles.container}
      onPress={() => dispatch(setRole(type.toUpperCase()))}
    >
      <Icon
        name={role == type.toUpperCase() ? "dot-circle" : "circle"}
        size={20}
        color="rgb(0, 112, 206)"
      />
      <Text style={styles.text}>{type}</Text>
    </Button>
  );
};

export default CustomerType;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: "rgb(232, 243, 251)",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    marginHorizontal: 10,
  },
});
