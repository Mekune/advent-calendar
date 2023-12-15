import React, { FC } from "react";

interface DayProps {
  number: number;
  onClick: () => void;
  disabled: boolean;
}

export default function Day({ number, onClick, disabled }: DayProps) {
  return (
    <button
      className={` day ${
        disabled && "open"
      }`}
      onClick={onClick}
    >
      {number}
    </button>
  );
}
