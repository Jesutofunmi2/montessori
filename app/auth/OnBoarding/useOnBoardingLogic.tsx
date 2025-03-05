import { slides } from "@/constants/Slides";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

const useOnBoardingLogic = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<any> | null>(null);
  
    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const index = viewableItems[0].index ?? 0;
        setCurrentIndex(index);
  
        if (index === slides.length) {
          handleSkip();
        }
      }
    };
    const handleSkip = () => {
      navigation.navigate("GetStarted");
    };
    return {
        handleSkip,
        setCurrentIndex,
        currentIndex,
        flatListRef,
        onViewableItemsChanged,
    }
}

export default useOnBoardingLogic;