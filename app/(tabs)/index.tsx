import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
  Alert,
} from "react-native";
import { useState, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { useRouter, useFocusEffect } from "expo-router";
import { categories } from "@/utils/categories";
import { linkStorage, LinkStorage } from "@/storage/link-storage";

export default function Index() {
  const router = useRouter();
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);

  async function getLinks() {
    try {
      const reponse = await linkStorage.get();
      setLinks(reponse);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/logo.png")} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color="#a89907" />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />
      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => console.log("clicouuu")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name="close" size={32} color="#f3d915" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Google</Text>
            <Text style={styles.modalUrl}>https://www.google.com</Text>
            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
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
  links: {
    borderTopWidth: 1,
    borderTopColor: "#f3d915",
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#e9e4bb",
    borderTopWidth: 1,
    borderTopColor: "#f3d915",
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 24,
    fontWeight: "500",
    color: "#f3d915",
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#a89907",
  },
  modalUrl: {
    fontSize: 16,
    color: "#1a1c27",
  },
  modalFooter: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#f3d915",
    paddingVertical: 14,
  },
});
