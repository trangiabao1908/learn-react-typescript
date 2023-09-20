import React, { createContext } from "react";
interface Props {
  children: React.ReactNode;
}
export interface progressType {
  lastTime: string;
  status: string;
}
const progressDefault = {
  lastTime: "19/09/2023",
  status: "In Progress",
};
export const ProcessContext = createContext<progressType>(progressDefault);
const ProgressProvider: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <ProcessContext.Provider value={progressDefault}>
      {children}
    </ProcessContext.Provider>
  );
};

export default ProgressProvider;
