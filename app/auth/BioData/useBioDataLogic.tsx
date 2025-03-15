import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { usePlatform } from "@/hooks";
import { steps } from "@/constants/Slides";

const useBioDataLogic = () => {
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
    } else {
      navigation.goBack();
    }
  };

  const updatedSteps = steps.map((s, index) => {
    if (index === 3 && answers[2]) {
      return { ...s, question: `How old is ${answers[2]}?` };
    }
    return s;
  });

  return {
    step,
    setAnswers,
    answers,
    setProgress,
    progress,
    handleContinue,
    handlePrevious,
    updatedSteps,
  };
};

export default useBioDataLogic;
