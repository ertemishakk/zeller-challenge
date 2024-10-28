import React from "react";
import { ViewStyle, StyleProp, Pressable } from "react-native";

const Button = ({
  children,
  containerStyle,
  onPress,
  disabled = false,
  onLongPress,
}: {
  children: React.ReactNode;
  onPress?: (e?: any) => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onLongPress?: (e?: any) => void;
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={(e) => {
        if (onPress) onPress!(e);
      }}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        { outline: "none", opacity: pressed ? 0.5 : 1 },
        containerStyle,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default Button;
