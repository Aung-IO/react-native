import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen(){
    return(
        <View style={styles.container}>
            <Text>  Detail Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});