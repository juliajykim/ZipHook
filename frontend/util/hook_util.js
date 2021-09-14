import { useEffect } from "react";
export const customDidMount = (callback) => useEffect(() => callback(), []);

export const useComponentWillUnmount = (callback) =>
  useEffect(() => () => callback(), []);
