import { Tabs } from "expo-router"
import React from "react"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { TabBarIcon } from "@/components"
import { useColorScheme } from "react-native"
import { Colors } from "@/constants"

export default function TabLayout() {
    const colorScheme = useColorScheme()
    const insets = useSafeAreaInsets()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Discover",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "disc" : "disc-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="playlist"
                options={{
                    headerShown: true,
                    title: "Playlist",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={
                                focused
                                    ? "musical-notes"
                                    : "musical-notes-outline"
                            }
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "heart" : "heart-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="personal"
                options={{
                    title: "Personal",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "person" : "person-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
