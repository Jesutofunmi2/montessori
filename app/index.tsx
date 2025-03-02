import React, { useEffect, useState} from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalConfig } from "@/constants/String";
import { Stack, useRouter, useSegments } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components";
import OnBoardingCard from "@/components/primary/OnBoardingCard";
import { colors } from "@/constants";


const Page = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
     const checkFirstLaunch = async()=> {
      //  const checkFirstVal = await AsyncStorage.getItem(LocalConfig.IS_ONBOARDED);
      //  console.log(checkFirstVal);
       if(segments[0] === undefined){
        setShowOnBoarding(true);
        //router.replace("/auth/OnBoarding");
       }
     }
     checkFirstLaunch();
  }, [segments]);

  const onFirstLaunchClose = async() => {
    //  await AsyncStorage.setItem(LocalConfig.IS_ONBOARDED, "true");
    //  setShowOnBoarding(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text
        text={"Explore hands-on learning with fun activities!"}
        color={colors.white}
        fontSize={38}
        fontFamily="Fredoka-Medium"
        textAlign="center"
      />
      </View>
      <OnBoardingCard>
        <Text text="KOLLL"/>
      </OnBoardingCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.yellow500
  },
  text: {
    alignItems: "center",
    margin: 20,
  }
});
export default Page;
