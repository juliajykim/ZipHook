import { useEffect, useRef } from "react";
export const useComponenDidMount = (callback) =>
  useEffect(() => callback(), []);

export const useComponentWillUnmount = (callback) =>
  useEffect(() => () => callback(), []);

export const useComponentDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

