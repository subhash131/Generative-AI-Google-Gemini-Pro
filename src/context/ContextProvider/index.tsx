"use client";
import React, { useContext } from "react";
import StateContext from "../StateContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <StateContext>{children}</StateContext>;
};

export default ContextProvider;
