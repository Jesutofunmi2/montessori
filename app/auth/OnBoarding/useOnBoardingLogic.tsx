import { slides } from "@/constants/Slides";
import { RootState } from "@/store";
import { setHasSeenOnboarding } from "@/store/modules/userSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const useOnBoardingLogic = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const hasSeenOnboarding = useSelector((state: RootState) => state.userSlice.hasSeenOnboarding);
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<any> | null>(null);
    const isMounted = useRef(true);
    const dispatch = useDispatch();

    useEffect(() => {
      if (hasSeenOnboarding) {
        navigation.navigate("GetStarted");
        return;
    }
      isMounted.current = true; 

      const interval = setInterval(() => {
          if (!isMounted.current) return;
          if (currentIndex < slides.length - 1) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
              flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
          } else {
              handleSkip();
          }
      }, 2000);

      return () => {
          clearInterval(interval);
          isMounted.current = false;
      };
  }, [currentIndex]);
  
    const handleSkip = () => {
      isMounted.current = false;
      dispatch(setHasSeenOnboarding(true));
      navigation.navigate("GetStarted");
  };
    return {
        handleSkip,
        setCurrentIndex,
        currentIndex,
        flatListRef,
    }
}

export default useOnBoardingLogic;
