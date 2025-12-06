"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventStack from "./EventStack";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} className="rounded-2xl p-2" />
      <EventStack />
    </>
  );
}
