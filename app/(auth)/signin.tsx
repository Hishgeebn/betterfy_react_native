import { LoginSchema, LoginSchemaType } from "@/utils"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomButton, TextField, ThemedText, ThemedView } from "@/components"
import { Pressable, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { primaryColor } from "@/constants"

type SignInProps = {}

const SignIn: React.FC<SignInProps> = () => {
    const {
        handleSubmit,
        formState: { errors: formErrors },
        setFocus,
        control,
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: "", password: "" },
    })

    // useEffect(() => {
    //     setFocus("email")
    // }, [])

    return (
        <>
            <ThemedView style={styles.container}>
                <ThemedText type="title" style={styles.title}>
                    Sign In
                </ThemedText>

                <ThemedText style={styles.help}>
                    If you need any support{" "}
                    <Link href="/signup" style={styles.link}>
                        click here
                    </Link>
                </ThemedText>

                <ThemedView style={styles.form}>
                    <TextField
                        errors={formErrors.email}
                        placeholder="Enter Email"
                        name="email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        control={control}
                    />

                    <TextField
                        errors={formErrors.password}
                        secureTextEntry
                        placeholder="Password"
                        name="password"
                        control={control}
                    />

                    <Pressable>
                        <ThemedText style={styles.recovery}>
                            Recovery password
                        </ThemedText>
                    </Pressable>

                    <CustomButton
                        type="primary"
                        // onPress={handleSubmit(() => {})}
                        title="Sign In"
                    />
                </ThemedView>

                <ThemedText style={styles.help}>
                    not a member ? register now
                </ThemedText>
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 28,
        display: "flex",
    },
    title: {
        marginHorizontal: "auto",
        textAlign: "center",
        textTransform: "capitalize",
    },
    help: {
        fontSize: 12,
        textTransform: "capitalize",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 36,
    },
    link: {
        color: primaryColor,
    },
    form: {
        display: "flex",
        gap: 20,
    },
    recovery: {
        fontSize: 12,
        textTransform: "capitalize",
        padding: 0,
    },
})
export default SignIn
