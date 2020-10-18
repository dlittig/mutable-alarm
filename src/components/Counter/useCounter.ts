import { useRef, useState } from "react";

type ICounterHook = {
  initialValue: number;
  direction: "up" | "down";
};

export const useCounter = (initialValue, direction) => {
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const [counter, setCounter] = useState(initialValue);
  const delta = direction === "up" ? 1 : -1;

  const onStart = () => {
    setActive(true);
    setPaused(false);
    intervalRef.current = window.setInterval(() => {
      setCounter((counter) => counter + delta);
      console.log(`counter: ${counter}`);
    }, 100);
  };

  const onStop = () => {
    setPaused(true);
    setActive(false);
    clearInterval(intervalRef.current);
  };

  const onReset = () => {
    setActive(false);
    setPaused(false);
    setCounter(initialValue);
  };

  return {
    isActive,
    isPaused,
    onStart,
    onStop,
    onReset,
    counter,
  };
};
