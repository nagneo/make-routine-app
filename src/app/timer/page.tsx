"use client";
import { useState } from "react";
import { useEffect } from "react";
import Button from "@/components/Button"



export default function TimerPage() {
  const [time, setTime] = useState<number>(5 * 60); // 5 minutes
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>(0);
  
  useEffect(() => {
    if (isRunning && time > 0) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    } else if (time === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [
    isRunning,
    intervalId,
    time
  ]);
  
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleSkip = () => {
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-8 px-4">
      <h1 className="text-4xl font-bold">Digital Timer</h1>
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full w-[300px] h-[300px] shadow-md flex items-center justify-center">
        <TimerIcon className="w-12 h-12 absolute top-4 text-gray-500 dark:text-gray-400" />
        <div className="text-6xl font-bold">
          <span>12:34</span>
        </div>
      </div>
      <div className="flex gap-4">
        <Button content="Pause" onClick={handlePause}></Button>
        <Button content="Complete" onClick={handleStart}></Button>
        <Button content="Skip" onClick={handleSkip}></Button>
      </div>
    </section>
  )
}

function TimerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}