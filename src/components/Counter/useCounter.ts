import { useEffect, useRef, useState } from "react";

type ICounterHook = {
  initialValue: number;
  direction: "up" | "down";
};

export const useCounter = (initialValue, direction) => {
  const intervalRef = useRef(null);
  const [counter, setCounter] = useState<number | null>(initialValue);
  const delta = direction === "up" ? 1 : -1;

  const onStart = () => {
    intervalRef.current = window.setInterval(() => {
      setCounter((counter) => counter + delta);
    }, 50);
  };

  const onStop = () => {
    clearInterval(intervalRef.current);
  };

  const onReset = () => {
    setCounter(initialValue);
  };

  const updateCounter = (value) => {
    setCounter(value);
  };

  return {
    onStart,
    onStop,
    onReset,
    counter,
    updateCounter,
  };
};
