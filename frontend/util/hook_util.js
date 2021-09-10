import { useEffect } from "react";

export const useComponentDidMount = (callback) => {
  return useEffect(() => callback(), []);
};

export const useComponentWillUnMount = (callback) => {
  return useEffect(() => callback(), []);
};
