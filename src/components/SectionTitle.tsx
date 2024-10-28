import { Text } from "react-native";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text style={{ fontWeight: "bold", marginVertical: 10 }}>{title}</Text>
  );
};

export default SectionTitle;
