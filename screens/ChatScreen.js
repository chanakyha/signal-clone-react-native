import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Avatar } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { db, auth } from "../firebase";
import * as firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
  const [textInput, setTextInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      options: { headerTitleAlign: "left" },

      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity>
            <Ionicons size={24} name="call" color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection("chats").doc(route.params.id).collection("Messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: textInput,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });

    setTextInput("");
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>{/* Chat Goes Here */}</ScrollView>
            <View style={styles.footer}>
              <TextInput
                value={textInput}
                onChangeText={(text) => setTextInput(text)}
                style={styles.textInput}
                placeholder="Signal Message"
                onSubmitEditing={sendMessage}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="send" size={24} color="#2B68E6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",

    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});
