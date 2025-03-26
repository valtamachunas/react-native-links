import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Category } from "@/components/index";
import { categories } from "@/utils/categories";

export default function Index() {
  return (
  <View style={styles.container}>
 <View style={styles.header}>
<Image style={styles.logo} source={require('@/assets/logo.png')}  />
<TouchableOpacity>
<MaterialIcons name="add" size={32} color="#a89907"/>
</TouchableOpacity>
 </View>

 <Category name={categories[0].name} icon={categories[0].icon} isSelected/>
 <Category name={categories[1].name} icon={categories[1].icon} isSelected/>
 <Category name={categories[2].name} icon={categories[2].icon} isSelected/>

  </View>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal: 24,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 32,

  },
  container:{
    flex: 1,
    paddingTop: 52,
  },
  logo: {
    width: 32,
    height: 38
  },
  
});