import { ThemedText, ThemedView } from "@/components"
import { StyleSheet } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

type PlaylistProps = {}

const PlaylistScreen: React.FC<PlaylistProps> = () => {
    const insets = useSafeAreaInsets()

    return (
        <ThemedView style={{ ...styles.container, paddingTop: insets.top }}>
            <ThemedText style={styles.text}>PlaylistScreen</ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
    },
    text: {
        fontSize: 16,
    },
})

export default PlaylistScreen
