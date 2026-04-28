import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Splash(){
    useEffect(() => {
        setTimeout(() =>{
            router.replace("/(tabs)");
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Gordura App</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
