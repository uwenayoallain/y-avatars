import * as React from "react";
import { getNumber, getRandomColor } from "../utilities";

const ELEMENTS = 64;
const SIZE = 80;

function generateColors(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName % (i + 13), colors, range),
  }));

  return elementsProperties;
}

const AvatarTriangle = (props) => {
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
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <rect width={SIZE} height={SIZE} rx={props.radius} fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <rect fill={properties[0].color} width={SIZE} height={SIZE} />
        <rect
          y={10}
          fill={properties[1].color}
          width={SIZE}
          height={SIZE}
          rx={props.radius}
        />
        <rect
          y={-10}
          fill={properties[2].color}
          width={SIZE}
          height={SIZE}
          rx={props.radius}
        />
        <rect
          y={20}
          fill={properties[3].color}
          width={SIZE}
          height={SIZE}
          rx={props.radius}
        />
        <rect
          y={30}
          fill={properties[4].color}
          width={SIZE}
          height={SIZE}
          rx={props.radius}
        />
        <rect
          y={40}
          fill={properties[0].color}
          width={SIZE}
          height={SIZE}
          rx={props.radius}
        />
        <text x={20} y={SIZE / 2} fontSize={30} fill={properties[5].color}>
          (*_*)
        </text>
      </g>
    </svg>
  );
};

export default AvatarTriangle;
