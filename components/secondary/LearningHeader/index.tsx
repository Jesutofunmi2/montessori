import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import React from "react";
import SoundIcon from "@/assets/svgs/SoundIcon";
import { ArrowBackIcon } from "@/assets/svgs";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface LearningCardInterface {
  title: string;
  enabled: boolean;
}
const LearningCard = ({ title, enabled }: LearningCardInterface) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={[styles.topicItem]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {enabled && <ArrowBackIcon size={27} />}
      </TouchableOpacity>
      <TouchableOpacity>
        <SoundIcon />
      </TouchableOpacity>
      <Text style={[styles.topicText]}>{title}</Text>
    </View>
  );
};

export default LearningCard;
