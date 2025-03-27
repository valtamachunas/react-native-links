import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/logo.png")} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color="#a89907" />
        </TouchableOpacity>
      </View>
      <Categories />
      <Link
        name="Google"
        url="https://www.google.com"
        onDetails={() => console.log("clicouuu")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  container: {
    flex: 1,
    paddingTop: 52,
  },
  logo: {
    width: 32,
    height: 38,
  },
});
