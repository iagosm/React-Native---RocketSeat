import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSignIn() {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Login", "Preencha todos os campos");
      return;
    }
    Alert.alert("Login", email + " - " + password);
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({
        ios: "padding",
        android: "height",
      })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("@/assets/img1.png")}
            style={styles.ilustration}
          />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha.
          </Text>

          <View style={styles.form}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />

            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <Button label="Entrar" onPress={handleSignIn} />
          </View>
          <Text style={styles.footerText}>
            Não tem uma conta?{" "}
            <Link style={styles.footerLink} href="/signup">
              Cadastre-se aqui
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  ilustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 16,
  },
  form: {
    marginTop: 24,
    gap: 16,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860",
  },
  footerLink: {
    color: "#032ad7",
    fontWeight: 700,
  },
});
