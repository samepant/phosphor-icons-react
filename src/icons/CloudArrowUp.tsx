/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="102.059 161.941 136 128 169.941 161.941" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="136" y1="208" x2="136" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M104,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M80,128a80,80,0,0,1,80-80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M160,48a80.00315,80.00315,0,0,1,8,159.605" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" opacity="0.2"/>
  <polyline points="102.053 161.941 135.994 128 169.935 161.941" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="135.99414" y1="208" x2="135.99414" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M103.99414,208h-32A56,56,0,1,1,85.91338,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M79.99414,128a80,80,0,0,1,80-80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M159.99414,48a80.00315,80.00315,0,0,1,8,159.605" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M160.001,40A88.102,88.102,0,0,0,81.28809,88.6709l-.00538-.00049A87.46336,87.46336,0,0,0,71.98926,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72.001,216h88a88,88,0,0,0,0-176ZM175.5918,151.59766a7.99945,7.99945,0,0,1-11.31348,0l-20.28418-20.28418V192a8,8,0,0,1-16,0V131.31348L107.71,151.59766a7.99984,7.99984,0,1,1-11.31348-11.31348l33.937-33.937a7.95651,7.95651,0,0,1,.592-.5354c.08374-.06885.17224-.12818.258-.19312.12256-.09253.24317-.18725.3711-.273.10718-.07153.2185-.1333.32837-.19922.11377-.06836.22534-.13964.34277-.20263.11353-.06055.23022-.11182.34583-.16651.12072-.05737.23986-.11767.36389-.16894.11157-.04614.22583-.08325.33911-.124.13281-.04834.26416-.09888.40014-.14014.1128-.03394.22718-.0586.34107-.08765.13867-.0354.27612-.074.4176-.1018.12976-.02588.26087-.04053.3916-.05982.12744-.0188.25305-.04272.38233-.05518.232-.02294.465-.03271.69812-.0354.02978-.00024.05871-.00439.08862-.00439s.05884.00415.08862.00439c.23316.00269.46607.01246.69812.0354.12928.01246.25489.03638.38233.05518.13074.01929.26184.03394.3916.05982.14148.02783.27893.0664.4176.1018.11389.029.22827.05371.34107.08765.136.04126.26733.0918.40014.14014.11328.04077.22754.07788.33911.124.124.05127.24317.11157.3639.16894.1156.05469.2323.106.34582.16651.11743.063.229.13427.34277.20263.10987.06592.2212.12769.32837.19922.12793.0857.24854.18042.3711.273.08581.06494.17431.12427.258.19312a7.95865,7.95865,0,0,1,.59205.5354l33.937,33.937A7.99915,7.99915,0,0,1,175.5918,151.59766Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="102.059 161.941 136 128 169.941 161.941" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="136" y1="208" x2="136" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M104,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M80,128a80,80,0,0,1,80-80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M160,48a80.00315,80.00315,0,0,1,8,159.605" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="102.059 161.941 136 128 169.941 161.941" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="136" y1="208" x2="136" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M104,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M80,128a80,80,0,0,1,80-80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M160,48a80.00315,80.00315,0,0,1,8,159.605" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="102.059 161.941 136 128 169.941 161.941" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="136" y1="208" x2="136" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M104,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,128a80,80,0,0,1,80-80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M160,48a80.00315,80.00315,0,0,1,8,159.605" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CloudArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  ); 
});

CloudArrowUp.displayName = "CloudArrowUp";

export default CloudArrowUp;
