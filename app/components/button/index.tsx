import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,
    backgroundColor: "#a6c496",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f3d915",
    padding: 10,
    color: "#000",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});
