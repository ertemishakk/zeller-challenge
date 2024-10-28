import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setSearch } from "../reducers/search";

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  return (
    <TextInput
      value={value}
      placeholder="Search Customer"
      style={styles.input}
      onChangeText={(text) => setValue(text)}
      onSubmitEditing={() => {
        dispatch(setSearch(value));
      }}
      returnKeyType="search"
    />
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "silver",
  },
});
