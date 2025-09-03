import { createContext, useState } from "react";

export const contextTheme = createContext();

export default function ThemeProvider({ children }) {
  const [isdark, Setisdark] = useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  return (
    <div>
      <contextTheme.Provider value={[isdark, Setisdark]}>
        {children}
      </contextTheme.Provider>
    </div>
  );
}
