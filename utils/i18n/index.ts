import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Localization from "expo-localization"
import resources from "./resource"

const LANGUAGE_DETECTOR = {
    type: "languageDetector" as const,
    async: true,
    detect: async (callback: (lng: string) => void): Promise<void> => {
        try {
            const storedLanguage = await AsyncStorage.getItem("user-language")
            if (storedLanguage) {
                return callback(storedLanguage)
            }
            return callback(Localization.locale.split("-")[0])
        } catch (error) {
            console.error("Error reading language", error)
            callback("en")
        }
    },
    init: (): void => {},
    cacheUserLanguage: async (language: string): Promise<void> => {
        try {
            await AsyncStorage.setItem("user-language", language)
        } catch (error) {
            console.error("Error setting language", error)
        }
    },
}

i18next
    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        compatibilityJSON: "v3",
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18next
