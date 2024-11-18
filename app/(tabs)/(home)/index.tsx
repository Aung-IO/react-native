import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

<TouchableOpacity onPress={() => router.push("/details")} style={styles.button}>
  <Text style={styles.text}>View Details</Text>
</TouchableOpacity>

      {/* <Button title="View Detail" onPress={() => router.push("/details")} /> */}


      {/* <Link href="/(tabs)/(home)/details" asChild>
      
      <Pressable>
        <Text>View Details</Text>
      </Pressable>
      </Link> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    borderRadius: 6,
    backgroundColor: 'blue',
    padding: 10,
    
  },
  text : {
    color: 'white'
  }
})
