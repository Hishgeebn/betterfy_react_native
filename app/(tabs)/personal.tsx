import { ThemedText, ThemedView } from "@/components"
import { StyleSheet } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

type PersonalProps = {}

const PersonalScreen: React.FC<PersonalProps> = () => {
    const insets = useSafeAreaInsets()

    return (
        <ThemedView style={{ ...styles.container, paddingTop: insets.top }}>
            <ThemedText style={styles.text}>PersonalScreen</ThemedText>
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

export default PersonalScreen
