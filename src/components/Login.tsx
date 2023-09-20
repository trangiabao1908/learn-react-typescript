import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { AuthContext, AuthType } from "../context/AuthProvider";
import React from "react";
import { useState, useContext } from "react";
const Login = () => {
  const { handleLogin, isOpened, setOpen } = useContext<AuthType>(AuthContext);
  const [username, setUserName] = useState<string>("");
  const handleChangeUserName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserName(e.target.value);
  };
  const handleLoginLogic = () => {
    handleLogin(username);
    setUserName("");
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog open={isOpened} onClose={() => setOpen(false)}>
        <DialogTitle>UserName</DialogTitle>
        <DialogContent>
          <TextField
            variant="standard"
            autoComplete="off"
            autoFocus
            margin="dense"
            required
            value={username}
            fullWidth
            onChange={(e) => handleChangeUserName(e)}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoginLogic}
            disabled={username === ""}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Login;
