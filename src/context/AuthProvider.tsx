import React, { createContext, useReducer, useState } from "react";
import { AuthActionType } from "../reducer/ActionType";
import { AuthStateType } from "../reducer/AuthReducer";
import AuthReducer from "../reducer/AuthReducer";
interface Props {
  children: React.ReactNode;
}
export interface AuthType {
  handleLogin: (username: string) => void;
  authstate: AuthStateType;
  isOpened: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthValueDefaults: AuthStateType = {
  isLogin: false,
  username: "",
};
export const AuthContext = createContext<AuthType>({
  authstate: AuthValueDefaults,
  isOpened: false,
  setOpen: () => null,
  handleLogin: () => null,
});
const AuthProvider: React.FC<Props> = (props) => {
  const [isOpened, setOpen] = useState<boolean>(false);
  const [authstate, dispatch] = useReducer(AuthReducer, AuthValueDefaults);
  const { Toggle_Auth } = AuthActionType;
  const { children } = props;
  const handleLogin = (username: string) => {
    dispatch({ type: Toggle_Auth, payload: username });
  };

  return (
    <AuthContext.Provider value={{ authstate, handleLogin, isOpened, setOpen }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
