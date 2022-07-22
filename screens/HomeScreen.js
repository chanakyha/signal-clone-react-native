import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomListItem from "../components/CustomListItem";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "@rneui/base";
import { auth, db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(alert);
  };

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: { color: "#000" },
      headerTintColor: "#000",
      headerLeft: () => (
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity onLongPress={signOut} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        {chats?.map(({ chatName, id }) => (
          <CustomListItem key={id} id={id} chatName={chatName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
