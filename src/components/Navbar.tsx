import {
  AppBar,
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
  Chip,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Welcome from "./Welcome";
import Button from "@mui/material/Button";
import { SxProps, Theme, PropTypes } from "@mui/material";
import { ProcessContext, progressType } from "../context/ProgressProvider";
import { ThemeContext, ThemeType } from "../context/ThemeProvider";
import { AuthContext, AuthType } from "../context/AuthProvider";
import Login from "./Login";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyStyles: SxProps<Theme> = (theme: Theme) => ({
  color: "white",
  border: "1px solid white",
  outline: "1px solid white",
});
const Navbar: React.FC = () => {
  const [position, setPosition] = useState<string>("Full-Stack Developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const handleChangePosition = (e: SelectChangeEvent<string>) => {
    setPosition(e.target.value);
  };
  useEffect(() => {
    const handleTime = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(handleTime);
  }, []);

  // context //
  const { lastTime, status } = useContext(ProcessContext) as progressType;
  const { theme } = useContext(ThemeContext) as ThemeType;
  const { setOpen, authstate, handleLogin } = useContext<AuthType>(AuthContext);
  const { isLogin } = authstate;
  const handleLogin1 = () => {
    if (isLogin) {
      handleLogin("");
    } else if (isLogin === false) {
      setOpen(true);
    }
  };
  return (
    <AppBar position="static" color={theme as PropTypes.Color}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          py={2}
        >
          <Typography variant="h1" fontSize={"25px"}>
            Learn React Typescript
          </Typography>
          <Box textAlign={"center"} mt={1}>
            <Welcome position={position}></Welcome>
            <Chip
              sx={{ mt: "5px" }}
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            ></Chip>
            <Box>
              <FormControl sx={{ mt: "10px" }}>
                <Select
                  value={position}
                  onChange={handleChangePosition}
                  sx={MyStyles}
                >
                  <MenuItem value="Full-Stack Developer">
                    Full-Stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign={"center"}>
            <Box mt={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button color="success" variant="contained" onClick={handleLogin1}>
              {isLogin ? "Logout" : "Login"}
            </Button>
          </Box>
          <Login></Login>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
