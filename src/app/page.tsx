'use client'
import { useState } from "react";
import Calendar from "./components/Calendar";
import Content from "./components/Content";




export default function Home() {
  const [activeDay, setActiveDay] = useState<number>(0);
  return (
    <>
      <Calendar setActiveDay={setActiveDay} />
      <Content id={activeDay} />
    </>
  );
}
