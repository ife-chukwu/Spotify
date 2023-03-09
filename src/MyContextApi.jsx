import React, { createContext } from "react";
const context = createContext();
const MyContextApi = ({ children }) => {
  const name = "Ifechukwu";

  const value = { name };
  return (
    <div>
      <context.Provider value={value}>{children}</context.Provider>
    </div>
  );
};

export { MyContextApi, context };
