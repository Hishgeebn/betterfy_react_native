import { Button, Image, StyleSheet } from "react-native"

import { Link } from "expo-router"
import { ParallaxScrollView, ThemedText, ThemedView } from "@/components"
import { useTranslation } from "react-i18next"

export default function HomeScreen() {
    // const navigation = useNavigation()
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: "en" | "es") => {
        i18n.changeLanguage(lng)
    }
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/partial-react-logo.png")}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedText>{t("welcome")}</ThemedText>
            <ThemedText>{t("greet", { name: "John Doe" })}</ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome negga!</ThemedText>
            </ThemedView>

            <ThemedView style={{ flexDirection: "row", gap: 10 }}>
                <Button title="English" onPress={() => changeLanguage("en")} />
                <Button title="Español" onPress={() => changeLanguage("es")} />
            </ThemedView>
            <Link href="/signin">
                <ThemedText>Move to Signin Screen</ThemedText>
            </Link>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
})
