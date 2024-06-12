import styles from "./Lineer.module.css";
import { styled, useTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const colorMapping = {
  50: "#0a6a0a",
  30: "#10b210",
  20: "#0eec0e",
  10: "red",
  5: "orange",
};

const BorderLinearProgress = styled(LinearProgress)(({ theme, ...props }) => ({
  margin: 9,
  height: 2,
  backgroundColor: "#ddd",

  ["& .MuiLinearProgress-bar"]: {
    backgroundColor: colorMapping[props.value],
    borderRight: "1px solid  #fff",
  },
}));

function Lineer() {
  const theme = useTheme();

  return (
    <div
      className={styles.parent}
      style={{ display: "flex", flexDirection: "column", gap: "5px" }}
    >
      <BorderLinearProgress variant="determinate" value={50} />

      <BorderLinearProgress variant="determinate" value={30} />

      <BorderLinearProgress variant="determinate" value={20} />

      <BorderLinearProgress variant="determinate" value={5} />

      <BorderLinearProgress variant="determinate" value={10} />
    </div>
  );
}

export default Lineer;
