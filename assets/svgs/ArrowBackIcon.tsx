import React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowBackIcon = ({ size = 32 }: { size?: number }) => {
  return (
    <Svg
      width={size} 
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M12.76 7.90662L4.66667 16L12.76 24.0933"
        stroke="#1F2937"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.3333 16H4.89333"
        stroke="#1F2937"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
