import TopicCard from "@/components/secondary/TopicCard";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { colors, layout } from "@/constants";
import { ArrowBackIcon } from "@/assets/svgs";
import { Text } from "@/components";
import { globalStyles } from "@/assets/globalStyles";

type Props = StackScreenProps<RootStackParamList, "SubjectDetail">;
const SubjectDetail = ({ route, navigation }: Props) => {
  const { subject } = route.params;
  return (
    <View style={[globalStyles.container, globalStyles.body]}>
      <View style={[globalStyles.rowStart, styles.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon size={23} />
        </TouchableOpacity>
        <Text
          text={subject.name}
          style={{
            fontFamily: "Fredoka_500Medium",
            fontSize: 20,
            color: colors.black,
          }}
        />
      </View>
      <View style={styles.subjectsContainer}>

      <FlatList
        data={subject.topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TopicCard item={item} enabled={item.id === "1" ? true: false}/>}
        contentContainerStyle={styles.subjectsContainer}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: layout.pixelSizeHorizontal(10),
    marginTop: layout.pixelSizeVertical(10),
  },
  subjectsContainer: {
    paddingBottom: 0,
    marginTop: 10,
  },
});
export default SubjectDetail;
