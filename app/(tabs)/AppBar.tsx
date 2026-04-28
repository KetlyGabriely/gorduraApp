import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    title: string;
};

export default function AppBar({title}: Props) {
    return(
        <SafeAreaView>
            <View style={styles.container}>

                <TouchableOpacity>
                    <Text style={styles.icon}>≡</Text>
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>

                <TouchableOpacity>
                    <Text style={styles.icon}>🔔</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "#ff007b",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    title:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    icon:{
        fontSize: 22,
        color: "#fff",
    },
});