/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="176 160 128 128 176 96 176 160"/>
  <polygon points="112 160 64 128 112 96 112 160"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="176 160 128 128 176 96 176 160"/>
  <polygon points="112 160 64 128 112 96 112 160"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M24,128A104,104,0,1,0,128,24,104.11791,104.11791,0,0,0,24,128Zm32,0a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,120,96v32a7.99943,7.99943,0,0,1,3.5625-6.65625l48-32A8.00016,8.00016,0,0,1,184,96v64a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,120,128v32a7.99975,7.99975,0,0,1-12.4375,6.65625l-48-32A7.99943,7.99943,0,0,1,56,128Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polygon points="172 160 124 128 172 96 172 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polygon points="116 160 68 128 116 96 116 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polygon points="172 160 124 128 172 96 172 160"/>
  <polygon points="116 160 68 128 116 96 116 160"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polygon points="172 160 124 128 172 96 172 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polygon points="116 160 68 128 116 96 116 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polygon points="172 160 124 128 172 96 172 160"/>
  <polygon points="116 160 68 128 116 96 116 160"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="176 160 128 128 176 96 176 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="112 160 64 128 112 96 112 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="176 160 128 128 176 96 176 160"/>
  <polygon points="112 160 64 128 112 96 112 160"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Rewind = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Rewind.displayName = "Rewind";

export default Rewind;
