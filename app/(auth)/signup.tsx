import { Link } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ThemedText, ThemedView } from "@/components"

type SignUpProps = {}

const SignUp: React.FC<SignUpProps> = () => {
    const insets = useSafeAreaInsets()

    return (
        <ThemedView style={{ flex: 1, paddingTop: insets.top }}>
            <ThemedText>Have a good coding</ThemedText>
            <Link href="/(tabs)/">
                <ThemedText>Move to Home Screen</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default SignUp
