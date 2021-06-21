import * as React from "react";
import { getNumber, getUnit, getRandomColor, getBoolean } from "../utilities";

const ELEMENTS = 4;
const SIZE = 80;

function generateColors(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 2),
    rotate: getUnit(numFromName * (i + 1), 360),
    isSquare: getBoolean(numFromName, 2),
  }));

  return elementsProperties;
}

const AvatarPattern = (props) => {
  const properties = generateColors(props.name, props.colors);

  return (
    <svg
      viewBox={"0 0 " + SIZE + " " + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      {...props}
    >
      <defs>
        <linearGradient id="Gradient1">
          <stop offset="5%" stop-color={properties[0].color} />
          <stop offset="95%" stop-color={properties[1].color} />
        </linearGradient>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stop-color={properties[3].color} />
          <stop offset="95%" stop-color={properties[2].color} />
        </linearGradient>

        <pattern id="Pattern" x="-10" y="0" width=".25" height=".25">
          <rect x="0" y="0" width="50" height="50" fill={properties[3].color} />
          <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
          <rect
            width="25"
            height="25"
            rx={props.radius + 10}
            fill="url(#Gradient1)"
          />
        </pattern>
      </defs>
      <mask id="mask1">
        <rect width={SIZE} height={SIZE} rx={props.radius} fill="white" />
      </mask>
      <g mask="url(#mask1)">
        <rect fill="url(#Pattern)" width="200" height="200" />
      </g>
    </svg>
  );
};

export default AvatarPattern;
