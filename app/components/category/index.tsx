import { StyleSheet, Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Category({ name, icon, isSelected, ...rest }: Props) {
  const color = isSelected ? "#e9e4bb" : "#1a1c27";

  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={14} color="color" />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    fontSize: 18,
    color: "#1a1c27",
    fontWeight: "600",
  },
});
