"use client";
import React, { useEffect, useState } from "react";
import Day from "./Day";
import image from "../../../public/logo.png";

interface CalendarProps {
  setActiveDay: (day: number) => void;
}

export default function Calendar({ setActiveDay }: CalendarProps) {
  const [daysOpen, setOpenDays] = useState<number[]>([]);
  const [daysToRender, setDaysToRender] = useState<number[]>([]);

  const days: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  const handleClick = (day: number) => {
    setActiveDay(day);
    const updatedDays = daysOpen.includes(day) ? daysOpen : [...daysOpen, day];

    setOpenDays(updatedDays);
    localStorage.setItem("daysOpen", JSON.stringify(updatedDays));
  };

  const handleReset = () => {
    setOpenDays([]);
    localStorage.removeItem("daysOpen");
    setDaysToRender(days); // Réinitialiser daysToRender pour afficher tous les jours
    console.log("qsd");
  };

  useEffect(() => {
    const daysOpenStorage = JSON.parse(
      localStorage.getItem("daysOpen") || "[]"
    ) as number[];
    setOpenDays(daysOpenStorage);

    console.log(daysOpen);
  }, []);

  useEffect(() => {
    const daysToRender = days.filter((day) => !daysOpen.includes(day));
    setDaysToRender(daysToRender);
  }, [daysOpen]); // Modifier pour déclencher l'effet uniquement sur les changements de daysOpen

  return (
    <>
      <div
        className="calendar"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      >
        {days.map((day) => (
          <Day
            key={day}
            number={day}
            onClick={() => handleClick(day)}
            disabled={!daysToRender.includes(day)}
          />
        ))}
      </div>
      <button onClick={handleReset}>Réinitialiser</button>
    </>
  );
}
