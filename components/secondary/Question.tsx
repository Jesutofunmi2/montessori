import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Input, ProgressiveBar, Text } from "../primary";
import { colors, layout } from "@/constants";
import { globalStyles } from "@/assets/globalStyles";
import { ArrowBackIcon } from "@/assets/svgs";
import { useNavigation } from "expo-router/build/useNavigation";

interface QuestionProps {
  question: string;
  options: string[];
  onContinue: (selected: string) => void;
  handlePrevious: () => void
  progress: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onContinue,
  progress,
  handlePrevious,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevious}>
            <ArrowBackIcon size={25} />
          </TouchableOpacity>
          <ProgressiveBar progress={progress} />
        </View>

        <Text
          style={styles.question}
          text={question}
          color={colors.slate500}
          fontFamily="Fredoka_500Medium"
          fontSize={24}
        />
        {options.length > 0 ? (
          <View style={styles.container}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[styles.option, selected === option && styles.selected]}
                onPress={() => setSelected(option)}
              >
                <Text
                  text={option}
                  style={[
                    styles.text,
                    selected === option && styles.selectedText,
                  ]}
                  color={colors.slate500}
                  fontFamily="Fredoka_500Medium"
                />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
            <View style={styles.container}>
          <Input
            placeholder={question}
          />
          </View>
        )}
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.buttonContainer}>
          <Button
            title="CONTINUE"
            outlined={true}
            disabled={!selected}
            onPress={() => selected && onContinue(selected)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.3,
    alignItems: "center",
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  contentWrapper: {
    flex: 0.6,
    justifyContent: "flex-end",
  },
  header: {
    flex: 0.4,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: layout.pixelSizeVertical(0),
    marginTop: layout.pixelSizeVertical(25),
    gap: layout.pixelSizeHorizontal(10),
    paddingHorizontal: globalStyles.container.paddingHorizontal,
  },
  question: {
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    width: "100%",
    alignSelf: "center",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.deepGray,
  },
  option: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.deepGray,
  },
  selected: {
    backgroundColor: colors.green200,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  selectedText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Question;
