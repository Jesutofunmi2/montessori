import { ScrollView } from "react-native";
import React from "react";
import useBioDataLogic from "./useBioDataLogic";
import { SafeAreaView } from "@/components/primary";
import secondary from "@/components/secondary";

const BioData = () => {
  const {
    step,
    answers,
    progress,
    handleContinue,
    handlePrevious,
    updatedSteps,
  } = useBioDataLogic();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <secondary.BioDataQuestion
          question={updatedSteps[step].question}
          options={updatedSteps[step].options}
          progress={progress}
          onContinue={handleContinue}
          handlePrevious={handlePrevious}
          answers={answers}
          step={step}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BioData;
