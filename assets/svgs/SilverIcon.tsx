import React from "react";
import Svg, { G, Path, Defs, Stop, LinearGradient } from "react-native-svg";

const SilverIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.33333 2.70036L0 9.31485L5.33333 11.3676L8.44444 3.6127L5.33333 2.70036Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M8.44444 3.6127L5.33333 11.3676H18.6667L15.5556 3.6127H8.44444Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M5.33333 11.3676L12 23L18.6667 11.3676H5.33333Z"
        fill="url(#paint2_linear)"
      />
      <Path
        d="M0 9.31485L12 23L5.33333 11.3676L0 9.31485Z"
        fill="url(#paint3_linear)"
      />
      <Path
        d="M12 23L24 9.31485L18.6667 11.3676L12 23Z"
        fill="url(#paint4_linear)"
      />
      <Path
        d="M24 9.31485L18.6667 2.70036L15.5556 3.6127L18.6667 11.3676L24 9.31485Z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M5.33333 2.70036L8.44444 3.6127H15.5556L18.6667 2.70036L12 2L5.33333 2.70036Z"
        fill="url(#paint6_linear)"
      />

      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="8.4"
          y1="3.6"
          x2="5.13"
          y2="11.2"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#2F82FF" />
          <Stop offset="1" stopColor="#A0C4FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1="12"
          y1="3.3"
          x2="12"
          y2="11.3"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3B82F6" />
          <Stop offset="1" stopColor="#93C5FD" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1="12"
          y1="11.3"
          x2="12"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#2563EB" />
          <Stop offset="1" stopColor="#60A5FA" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1="5.333"
          y1="11.3"
          x2="12.269"
          y2="22.8"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1E40AF" />
          <Stop offset="1" stopColor="#93C5FD" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1="18.88"
          y1="11.4"
          x2="11.74"
          y2="22.8"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1D4ED8" />
          <Stop offset="1" stopColor="#60A5FA" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1="15.333"
          y1="3.1"
          x2="18.82"
          y2="11.2"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#2563EB" />
          <Stop offset="1" stopColor="#93C5FD" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1="12"
          y1="2.2"
          x2="12"
          y2="3.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1E3A8A" />
          <Stop offset="1" stopColor="#3B82F6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SilverIcon;
