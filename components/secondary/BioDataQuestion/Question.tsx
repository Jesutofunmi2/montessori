import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, Input, ProgressiveBar, Text } from "../../primary";
import { colors, layout } from "@/constants";
import { ArrowBackIcon } from "@/assets/svgs";
import styles from "./style";

interface QuestionProps {
  question: string;
  options: string[];
  onContinue: (selected: string) => void;
  handlePrevious: () => void;
  progress: number;
  answers: { [key: number]: string };
  setAnswers: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>;
  step: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  onContinue,
  progress,
  handlePrevious,
  setAnswers,
  answers,
  step,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setSelected(null);
    setInputValue(answers[step] || "");
  }, [question, step]);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevious}>
            <ArrowBackIcon size={23} />
          </TouchableOpacity>
          <ProgressiveBar progress={progress} />
        </View>

        <Text
          style={styles.question}
          text={question}
          color={colors.slate500}
          fontFamily="Fredoka_500Medium"
          fontSize={layout.fontPixel(38)}
        />
        {options?.length > 0 ? (
          <View style={styles.container}>
            {options?.map((option) => (
              <TouchableOpacity
                key={option}
                style={[styles.option, selected === option && styles.selected]}
                onPress={() => {
                  setSelected(option);
                  setAnswers((prev) => ({ ...prev, [step]: option }));
                }}
              >
                <Text
                  text={option}
                  style={[selected === option && styles.selectedText]}
                  color={colors.slate500}
                  fontFamily="Fredoka_400Regular"
                  fontSize={layout.fontPixel(24)}
                  textAlign="left"
                />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.input}>
            <Input
              placeholder={""}
              onChangeText={(text) => {
                setInputValue(text);
                setAnswers((prev) => ({ ...prev, [step]: text }));
              }}
              style={{
                fontFamily: "Fredoka_400Regular",
                fontSize: layout.fontPixel(20),
                color: colors.black,
              }}
              containerStyle={{
                    borderColor: colors.green500,
              }}
            />
          </View>
        )}
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.buttonContainer}>
          <Button
            title="CONTINUE"
            outlined={options.length > 0 ? !selected : !inputValue.trim()}
            disabled={options.length > 0 ? !selected : !inputValue.trim()}
            onPress={() => {
              if (options.length > 0 && selected) {
                onContinue(selected);
              } else if (!options.length && inputValue.trim()) {
                onContinue(inputValue);
              }
            }}
            textStyle={{
              fontFamily: "Fredoka_500Medium",
              fontSize: layout.fontPixel(20),
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Question;
