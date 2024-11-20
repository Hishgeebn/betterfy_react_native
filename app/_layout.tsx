import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"
import { useColorScheme } from "react-native"
import "react-native-reanimated"

import { SafeAreaProvider } from "react-native-safe-area-context"
import { i18n } from "@/utils"
import { ThemedText } from "@/components"
import { I18nextProvider } from "react-i18next"
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    })

    // const [isI18nInitialized, setIsI18nInitialized] = useState(false)

    useEffect(() => {
        // Wait for i18next to initialize
        // i18n.on("initialized", () => {
        //     setIsI18nInitialized(true)
        // })

        // // If already initialized, set state immediately
        // if (i18n.isInitialized) {
        //     setIsI18nInitialized(true)
        // }

        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    // if (!isI18nInitialized) {
    //     return <ThemedText>Loading...</ThemedText>
    // }

    if (!loaded) {
        return null
    }

    return (
        <I18nextProvider i18n={i18n}>
            <SafeAreaProvider>
                <ThemeProvider
                    value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
                >
                    <Stack>
                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(auth)"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                </ThemeProvider>
            </SafeAreaProvider>
        </I18nextProvider>
    )
}
