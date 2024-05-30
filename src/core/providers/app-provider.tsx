"use client";

import { createContext } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
