import { SafeAreaView, ScrollView } from "react-native";
import styles from "./style";
import { globalStyles } from "../../../assets/globalStyles";
import Question from "@/components/secondary/BioDataQuestion/Question";
import React from "react";
import useBioDataLogic from "./useBioDataLogic";

const BioData = () => {
  const {
    step,
    setAnswers,
    answers,
    progress,
    handleContinue,
    handlePrevious,
    updatedSteps,
  } = useBioDataLogic();

  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Question
          question={updatedSteps[step].question}
          options={updatedSteps[step].options}
          progress={progress}
          onContinue={handleContinue}
          handlePrevious={handlePrevious}
          setAnswers={setAnswers}
          answers={answers}
          step={step}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BioData;
