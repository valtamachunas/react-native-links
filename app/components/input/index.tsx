import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={"#a89907"}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: "#e9e4bb",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f3d915",
    padding: 10,
    color: "#000",
    fontSize: 16,
  },
});
