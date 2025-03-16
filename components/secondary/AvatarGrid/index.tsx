import React from "react";
import { View, FlatList } from "react-native";
import styles from "./style";
import { Image } from "@/components/primary";
import { Avatar, avatars } from "@/constants/Slides";


const AvatarGrid = () => {
  const renderItem = ({ item }: { item: Avatar }) => {
    
    return (
    <View style={[styles.avatarContainer, { backgroundColor: item.color }]}>
        <Image source={item.image} style={styles.avatarImage} alt={item.name} />
    </View>
    );
  };

  return (
    <FlatList
      data={avatars}
      renderItem={renderItem}
      keyExtractor={(item) => item?.id}
      numColumns={3}
      contentContainerStyle={styles.gridContainer}
      scrollEnabled={false}
    />
  );
};

export default AvatarGrid;
