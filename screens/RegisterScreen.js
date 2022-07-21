import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text } from "@rneui/base";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const onRegister = () => {};

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50, textAlign: "center" }}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Input
          placeholder="Email"
          type="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Input
          placeholder="Profle Pic Url (Optional)"
          type="text"
          onChangeText={(text) => setImageURL(text)}
          value={imageURL}
          onSubmitEditing={onRegister}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={onRegister}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
