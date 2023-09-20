import { AuthActionType } from "./ActionType";
interface AuthAction {
  type: AuthActionType;
  payload: string;
}
export interface AuthStateType {
  username: string;
  isLogin: boolean;
}
const { Toggle_Auth } = AuthActionType;
const AuthReducer = (state: AuthStateType, action: AuthAction) => {
  switch (action.type) {
    case Toggle_Auth:
      return {
        ...state,
        isLogin: !state.isLogin,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
