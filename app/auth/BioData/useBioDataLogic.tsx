import { useDispatch, useSelector } from "react-redux";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { usePlatform } from "@/hooks";
import { steps } from "@/constants/Slides";
import { setAnswer, goBack, resetAnswers } from "../../../store/modules/bioDataAnswerSlice";
import { RootState } from "@/store";

const useBioDataLogic = () => {
  const { isIOS } = usePlatform();
  const dispatch = useDispatch();
  const { step, answers, progress } = useSelector(
    (state: RootState) => state.bioDataAnswerReducer
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleContinue = (answer: string) => {
    dispatch(setAnswer({ step, answer, totalQuestions: steps.length }));
  };

  const handlePrevious = () => {
    if (step > 0) {
      dispatch(goBack({totalQuestions: steps.length}));
    } else {
      dispatch(resetAnswers());
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
    answers,
    progress,
    handleContinue,
    handlePrevious,
    updatedSteps,
  };
};

export default useBioDataLogic;
