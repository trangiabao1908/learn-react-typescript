import { Fab, PropTypes } from "@mui/material";
import { Theme, SxProps } from "@mui/material";
import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";
import { ThemeType } from "../context/ThemeProvider";
const MyStyles: SxProps<Theme> = (theme: Theme) => ({
  position: "fixed",
  bottom: "3rem",
  right: "3rem",
});
const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeType;
  console.log(theme);
  const handleToggleTheme = () => {
    setTheme(theme === "primary" ? "secondary" : "primary");
  };

  return (
    <Fab
      color={theme as PropTypes.Color}
      variant="extended"
      onClick={handleToggleTheme}
      sx={MyStyles}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleTheme;
