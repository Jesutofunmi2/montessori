import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import { Image } from "@/components/primary";
import { Avatar, avatars } from "@/constants/Slides";
import { useDispatch } from "react-redux";
import { setSelectedAvatar } from "@/store/modules/avatarImageSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const AvatarGrid = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSelectAvatar = (avatar: Avatar) => {
    dispatch(setSelectedAvatar(avatar));
    navigation.navigate('Home')
  };

  const renderItem = ({ item }: { item: Avatar }) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelectAvatar(item)}
        activeOpacity={0.7}
      >
        <View style={[styles.avatarContainer, { backgroundColor: item.color }]}>
          <Image
            source={item.image}
            style={styles.avatarImage}
            alt={item.name}
          />
        </View>
      </TouchableOpacity>
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
