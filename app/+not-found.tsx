import { ThemedText, ThemedView } from "@/components"
import { Link, Stack } from "expo-router"
import { Image, StyleSheet } from "react-native"

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "404 Not Found!" }} />
            <ThemedView style={styles.container}>
                <ThemedText>404 Not Found!</ThemedText>
                <Image
                    style={styles.image}
                    source={require("@/assets/images/screen-not-found.png")}
                    alt="404"
                />
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: "100%",
        paddingVertical: 32,
    },
    image: {
        width: "100%",
        resizeMode: "contain",
    },
})
