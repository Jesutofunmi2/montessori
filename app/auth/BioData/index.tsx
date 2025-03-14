import { SafeAreaView, ScrollView } from "react-native";
import styles from "./style";
import { globalStyles } from "../../../assets/globalStyles";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { usePlatform } from "@/hooks";
import Question from "@/components/secondary/Question";

const steps = [
  {
    question: "Who is setting up the account?",
    options: ["I’m a Parent/Guardian", "Teacher/Educator", "Other"],
  },
  { question: "Are you home schooling?", options: ["Yes", "No"] },
  { question: "What’s your child’s name?", options: [] },
  { question: "How old is Eniola?", options: [] },
  { question: "What is your child’s gender?", options: ["Male", "Female"] },
  { question: "Prior Montessori Experience?", options: ["Yes", "No"] },
  { question: "Any Special Learning Needs?", options: ["Yes", "No", "Other"] },
];

const BioData = () => {
  const { isIOS } = usePlatform();
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const handleContinue = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [step]: answer }));
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
      setProgress(((step + 1) / steps.length) * 100);
    } else {
      //navigation.navigate("Login");
    }
  };
  const handlePrevious = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
      setProgress(((step - 1) / steps.length) * 100);
    }else{
        navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={[globalStyles.wrapper, styles.wrapper]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Question
          question={steps[step].question}
          options={steps[step].options}
          progress={progress}
          onContinue={handleContinue}
          handlePrevious={handlePrevious}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BioData;
