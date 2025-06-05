import { type PropsWithChildren } from "react";
import styles from "./Tile.module.css";

type Props = {
  isUncovered?: boolean;
  onClick?: () => void;
  onRightClick?: () => void;
};

/**
 * A tile of the Minesweeper game board.
 * @param isUncovered: If true, the tile is displayed as uncovered and no longer clickable.
 * @param onClick - Function to call when the tile is clicked.
 * @param onRightClick - Function to call when the tile is right-clicked.
 */
export const Tile = ({
  isUncovered = false,
  ...props
}: PropsWithChildren<Props>) => {
  if (isUncovered) {
    return <div className={styles.uncovered}>{props.children}</div>;
  }
  return (
    <button
      onClick={props.onClick}
      onContextMenu={(e) => {
        if (props.onRightClick) {
          e.preventDefault();
          props.onRightClick();
        }
      }}
    >
      {props.children}
    </button>
  );
};

/**
 * A mine tile.
 */
Tile.Mine = () => (
  <img src="/tileset/mine.png" alt="Mine" width={26} height={26} />
);

/**
 * A flag tile.
 */
Tile.Flag = () => (
  <img src="/tileset/mine.png" alt="Mine" width={26} height={26} />
);

/**
 * A numeric value tile.
 * @param value - The numeric value to display.
 */
Tile.Value = (prop: { value: number }) => {
  const colors = [
    "green",
    "orange",
    "brown",
    "red",
    "blue",
    "yellow",
    "purple",
    "cyan",
    "magenta",
  ];
  if (prop.value <= 0) return;
  return <span style={{ color: colors[prop.value - 1] }}>{prop.value}</span>;
};
