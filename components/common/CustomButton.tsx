import { FC } from "react"
import ThemedText from "./ThemedText"
import ThemedView from "./ThemedView"
import { Pressable, StyleSheet, type PressableProps } from "react-native"
import { primaryColor } from "@/constants"

type ButtonType = "primary" | "ghost"

type CustomButtonProps = PressableProps & {
    type: ButtonType
    title: string
}

const CustomButton: FC<CustomButtonProps> = ({
    type = "primary",
    title,
    ...props
}) => {
    return (
        <Pressable
            {...props}
            style={{
                ...style.main,
                ...(type === "primary" ? style.primary : null),
            }}
        >
            <ThemedText style={style.title}>{title}</ThemedText>
        </Pressable>
    )
}

const style = StyleSheet.create({
    main: {
        height: 80,
        padding: 12,
        paddingHorizontal: 28,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    primary: {
        backgroundColor: primaryColor,
        borderRadius: 30,
    },
    title: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
})

export default CustomButton
