import { createContext, useState } from "react";
export const context = createContext("create Context");
export function ContextProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "");
  return <context.Provider value={[mode,setMode]}>{children}</context.Provider>;
}
