import { useEffect, useRef, useState } from "react";

type ICounterHook = {
  initialValue: number;
  direction: "up" | "down";
};

export const useCounter = (initialValue, direction) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [isPaused, setPaused] = useState<boolean>(false);
  const intervalRef = useRef(null);
  const [counter, setCounter] = useState<number | null>(initialValue);
  const delta = direction === "up" ? 1 : -1;

  console.log("I render")

  const onStart = () => {
    setActive(true);
    setPaused(false);
    intervalRef.current = window.setInterval(() => {
      setCounter((counter) => counter + delta);
    }, 50);
    console.log("J Set date")
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

  const updateCounter = (value) => {
    setActive(false);
    setPaused(false);
    setCounter(value);
  };

  // useEffect(() => {
  //   console.log("isActive changed:", isActive)
  //   if (isActive && timeStarted === null) {
  //     setTimeStarted(new Date());
  //   } else {
  //     setTimeStarted(null);
  //   }
  // }, [isActive]);

  return {
    isActive,
    isPaused,
    onStart,
    onStop,
    onReset,
    counter,
    updateCounter,
  };
};
