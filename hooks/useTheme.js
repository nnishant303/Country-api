import { useContext } from "react";
import { contextTheme } from "../contexts/contextTheme";

export  const useTheme = ()=> useContext(contextTheme)
    