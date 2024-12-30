import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={31} height={30} fill="none" {...props}>
    <Rect width={30} height={30} x={0.049} fill="#15101C" rx={5} />
    <Path
      fill={props.color}
      d="m23.785 10.674-11 11a.687.687 0 0 1-.973 0L7 16.86a.688.688 0 1 1 .973-.972l4.326 4.326L22.812 9.701a.688.688 0 0 1 .973.973Z"
    />
  </Svg>
);
export default SvgComponent;
