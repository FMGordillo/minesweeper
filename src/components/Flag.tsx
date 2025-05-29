import type { HTMLAttributes } from "react";

export default function Flag(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <svg
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <g id="flag">
          <rect
            x="5"
            y="5"
            width="40"
            height="40"
            fill="#c0c0c0"
            stroke="#808080"
            stroke-width="1"
          />
          <line
            x1="5"
            y1="5"
            x2="45"
            y2="5"
            stroke="#ffffff"
            stroke-width="1"
          />
          <line
            x1="5"
            y1="5"
            x2="5"
            y2="45"
            stroke="#ffffff"
            stroke-width="1"
          />
          <line
            x1="45"
            y1="5"
            x2="45"
            y2="45"
            stroke="#404040"
            stroke-width="1"
          />
          <line
            x1="5"
            y1="45"
            x2="45"
            y2="45"
            stroke="#404040"
            stroke-width="1"
          />

          <line
            x1="25"
            y1="35"
            x2="25"
            y2="15"
            stroke="#000000"
            stroke-width="2"
          />
          <polygon points="25,15 25,25 35,20" fill="#ff0000" />
          <polygon points="25,25 35,20 35,22 25,27" fill="#800000" />
        </g>
      </svg>
    </button>
  );
}
