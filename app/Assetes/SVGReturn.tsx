import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.53.488a.75.75 0 0 1 0 1.06l-4.72 4.72H13a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 0 0 0-10.5H2.81l4.72 4.72a.75.75 0 0 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
