import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { View, TouchableOpacity } from "react-native";
import { Button, Input, ProgressiveBar, Text } from "../../primary";
import { colors, layout } from "@/constants";
import { ArrowBackIcon } from "@/assets/svgs";
import styles from "./style";
import AvatarGrid from "../AvatarGrid";

interface BioDataQuestionProps {
  question: string;
  options: string[];
  onContinue: (selected: string) => void;
  handlePrevious: () => void;
  progress: number;
  answers: { [key: number]: string };
  step: number;
}

const BioDataQuestion: React.FC<BioDataQuestionProps> = ({
  question,
  options,
  onContinue,
  progress,
  handlePrevious,
  step,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const answer = useSelector((state: RootState) => state.bioDataAnswerReducer.answers);

  useEffect(() => {
    setSelected(null);
    setInputValue(inputValue || "");
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
        {options?.length > 0 &&
        options.every((opt) => opt === "image") ? null : (
          <Text
            style={styles.question}
            text={question}
          />
        )}
        {options?.length > 0 && !options?.every((opt) => opt === "image") ? (
          <View style={styles.container}>
            {options?.map((option) => (
              <TouchableOpacity
                key={option}
                style={[styles.option, selected === option && styles.selected]}
                onPress={() => {
                  setSelected(option);
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
        ) : options?.length > 0 && options?.every((opt) => opt === "image") ? (
         
            <View style={{ marginTop: 15, alignItems: "center" }}>
              <Text
                style={styles.question}
                text={`Choose an avatar for ${answer[2]}`}
              />
              <AvatarGrid />
             
            </View>
         
        ) : (
          <View style={styles.input}>
            <Input
              placeholder={
                question.includes("name")
                  ? "Enter Name"
                  : question.includes("old")
                  ? "Enter Age"
                  : ""
              }
              onChangeText={(text) => {
                setInputValue(text);
              }}
              style={{
                fontFamily: "Fredoka_400Regular",
                fontSize: layout.fontPixel(20),
                color: colors.black,
              }}
              containerStyle={{
                borderColor: colors.green500,
                borderWidth: 2,
              }}
              isNumeric={
                question.includes("name")
                  ? false
                  : question.includes("old")
                  ? true
                  : false
              }
            />
          </View>
        )}
      </View>
      
      {options?.length > 0 && options.every((opt) => opt === "image") ? null : (
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
      )}
    </>
  );
};

export default BioDataQuestion;
