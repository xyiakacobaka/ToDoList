import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M24 12a1 1 0 0 1-1 1H13v10a1 1 0 0 1-2 0V13H1a1 1 0 0 1 0-2h10V1a1 1 0 0 1 2 0v10h10a1 1 0 0 1 1 1Z"
    />
  </Svg>
);
export default SvgComponent;
