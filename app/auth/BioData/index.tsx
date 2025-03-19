import { ScrollView } from "react-native";
import BioDataQuestion from "@/components/secondary/BioDataQuestion";
import React from "react";
import useBioDataLogic from "./useBioDataLogic";
import { SafeAreaView } from "@/components/primary";

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
        <BioDataQuestion
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
