import React, { useEffect } from 'react';
import * as Speech from 'expo-speech';
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import SoundIcon from "@/assets/svgs/SoundIcon";
import { ArrowBackIcon } from "@/assets/svgs";
import { NavigationProp, useNavigation } from "@react-navigation/native";



interface LearningCardInterface {
  title: string;
  enabled: boolean;
}
const LearningCard = ({ title, enabled }: LearningCardInterface) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleVoice = () => {
      Speech.speak(title, {
        language: "en-GB",
      });
    }

    useEffect(() => {
      handleVoice();
    }, [title])
  return (
    <View style={[styles.topicItem]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {enabled && <ArrowBackIcon size={27} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVoice}>
        <SoundIcon />
      </TouchableOpacity>
      <Text style={[styles.topicText]}>{title}</Text>
    </View>
  );
};

export default LearningCard;
