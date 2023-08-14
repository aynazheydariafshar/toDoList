import React from "react";
import { GiCheckMark } from "react-icons/gi";

export default function Home() {
  return (
    <div className="flex justify-start text-[34px] items-center">
      <GiCheckMark />
      <h1 className="font-bold ">Task List</h1>
    </div>
  );
}
