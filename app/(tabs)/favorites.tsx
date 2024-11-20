import { ThemedText, ThemedView } from "@/components"
import { StyleSheet } from "react-native"

export default function FavoritesScreen() {
    return (
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Favorites</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        display: "flex",
        height: "100%",
        flexDirection: "row",
        gap: 8,
    },
})
