import { Typography } from "@mui/material";
import { AuthContext, AuthType } from "../context/AuthProvider";
import { useContext } from "react";
interface Props {
  position: string;
  country?: string;
}
const Welcome = ({ position, country = "VietNam" }: Props) => {
  const { authstate } = useContext<AuthType>(AuthContext);
  const { username } = authstate;
  return (
    <Typography variant="h6">
      Welcome {username} - {position} from {country}
    </Typography>
  );
};
export default Welcome;
