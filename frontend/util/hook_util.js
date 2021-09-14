import { useEffect } from "react";
export const useComponenDidMount = (callback) =>
  useEffect(() => callback(), []);

export const useComponentWillUnmount = (callback) =>
  useEffect(() => () => callback(), []);
