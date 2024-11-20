import { ThemedView } from "@/components"
import { Ionicons } from "@expo/vector-icons"
import { Stack, useRouter } from "expo-router"
import { FC } from "react"
import { Image, Pressable, StyleSheet } from "react-native"

const AuthLayout: FC = () => {
    const router = useRouter()
    return (
        <>
            <ThemedView style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons size={24} name="chevron-back" color="#414141" />
                </Pressable>
                <Image
                    style={styles.image}
                    source={require("@/assets/images/logo-big.png")}
                    alt="logo"
                />
            </ThemedView>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="signin" />
                <Stack.Screen name="signup" />
            </Stack>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        position: "relative",
        paddingBottom: 46,
    },
    backButton: {
        position: "absolute",
        top: 36,
        left: 28,
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: "#000",
        opacity: 0.1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 110,
        height: 33,
        resizeMode: "contain",
        marginHorizontal: "auto",
        marginTop: 36,
    },
})

export default AuthLayout
