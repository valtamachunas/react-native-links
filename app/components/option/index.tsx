import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Option({ name, icon, variant = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <MaterialIcons
        name={icon}
        size={24}
        color={variant === "primary" ? "#a6c496" : "#9fb8a7"}
      />
      <Text
        style={
          variant === "primary" ? styles.primaryTitle : styles.secondaryTitle
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#a6c496",
  },
  secondaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#9fb8a7",
  },
});
