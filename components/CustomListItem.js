import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/base";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>Chanakyha</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>
          Dolore pariatur id exercitation labore consequat esse non nisi esse
          sit culpa voluptate. Laboris in in aute quis exercitation incididunt
          qui incididunt. Duis ipsum adipisicing incididunt excepteur laborum in
          in magna culpa velit proident veniam. Consequat occaecat ex labore ad.
          Et minim labore ex dolore cillum exercitation eu excepteur esse duis.
          Labore anim consequat voluptate aute in sint ullamco voluptate
          pariatur cupidatat sit pariatur pariatur. Ad adipisicing culpa ea
          tempor consequat id incididunt nostrud sit.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});