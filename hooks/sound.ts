import { Audio } from "expo-av";

const audioFiles: { [key: number]: any } = {
  1: require("@/assets/audios/1.mp3"),
  2: require("@/assets/audios/2.mp3"),
  3: require("@/assets/audios/3.mp3"),
  4: require("@/assets/audios/4.mp3"),
  5: require("@/assets/audios/5.mp3"),
  6: require("@/assets/audios/6.mp3"),
  7: require("@/assets/audios/7.mp3"),
  8: require("@/assets/audios/8.mp3"),
  9: require("@/assets/audios/9.mp3"),
  10: require("@/assets/audios/10.mp3"),
};

const getAudioFile = (number: number) => {
  return audioFiles[number] || null;
};

export const playSound = async (number: number) => {
  try {
    const audioSource = getAudioFile(number);

    if (!audioSource) {
      console.error("Audio file not found for number:", number);
      return;
    }

    const { sound } = await Audio.Sound.createAsync(audioSource);
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });

  } catch (error) {
    console.log("Error playing sound:", error);
  }
};
