import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={18} height={19} fill="none" {...props}>
    <Path
      fill="#9E78CF"
      d="M16.611 3.125H1.486a.687.687 0 1 0 0 1.375h.688v12.375a1.375 1.375 0 0 0 1.375 1.375h11a1.375 1.375 0 0 0 1.375-1.375V4.5h.687a.688.688 0 1 0 0-1.375Zm-2.062 13.75h-11V4.5h11v12.375ZM4.924 1.062A.687.687 0 0 1 5.61.375h6.875a.688.688 0 0 1 0 1.375H5.611a.687.687 0 0 1-.687-.688Z"
    />
  </Svg>
);
export default SvgComponent;
