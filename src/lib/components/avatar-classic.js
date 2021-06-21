import * as React from "react";
import { getNumber, getUnit, getRandomColor, getBoolean } from "../utilities";

const ELEMENTS = 20;
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

const Avatarclassic = (props) => {
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
      <mask id="mask1">
        <rect width={SIZE} height={SIZE} rx={props.radius} fill="white" />
      </mask>
      <g mask="url(#mask1)">
        <rect fill={properties[1].color} width={SIZE} height={SIZE} />
        <rect y={10} fill={properties[0].color} width={SIZE} height={2} />
        <rect y={20} fill={properties[2].color} width={SIZE} height={2} />
        <rect y={30} fill={properties[3].color} width={SIZE} height={2} />
        <rect y={45} fill={properties[4].color} width={SIZE} height={2} />
        <rect y={60} fill={properties[5].color} width={SIZE} height={2} />
        <rect y={70} fill={properties[6].color} width={SIZE} height={2} />
      </g>
    </svg>
  );
};

export default Avatarclassic;
