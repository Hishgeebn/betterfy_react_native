import { useController } from "react-hook-form"
import { StyleSheet, TextInput, type TextInputProps } from "react-native"
import ThemedView from "./ThemedView"
import ThemedText from "./ThemedText"
import { FC } from "react"
import { useThemeColor } from "@/hooks/useThemeColor"

// import DisplayError from './DisplayError'

export type TextFeildProps = TextInputProps & {
    errors?: any
    name: string
    control?: any
    direction?: "row" | "column"
    type?: "number" | "text"
}

const TextField: FC<TextFeildProps> = (props) => {
    const backgroundColor = useThemeColor(
        { light: undefined, dark: undefined },
        "background"
    )
    //? Props
    const {
        errors,
        name,
        type = "text",
        control,
        direction,
        ...inputProps
    } = props

    //? Form Hook
    const { field } = useController({
        name,
        control,
        rules: { required: true },
    })
    //? Handlers
    const onChangeHandler = (value: any) => {
        const inputValue = value

        if (type === "number" && inputValue.length !== 0) {
            field.onChange(parseInt(inputValue))
        } else {
            field.onChange(inputValue)
        }
    }

    //? Render(s)
    return (
        <ThemedView style={styles.container}>
            <TextInput
                id={name}
                value={field?.value}
                // name={field.name}
                onBlur={field.onBlur}
                onChangeText={onChangeHandler}
                ref={field.ref}
                {...inputProps}
                style={styles.input}
            />
            {/* <DisplayError errors={errors} /> */}
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    input: {
        width: "100%",
        height: 80,
        padding: 12,
        paddingHorizontal: 28,
        borderWidth: 1,
        borderColor: "#383838",
        borderRadius: 30,
    },
})

export default TextField
