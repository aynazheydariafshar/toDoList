import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Card from "../components/card";
import CardList from "../components/cardList";

export default function Home() {
  return (
    <div className="py-[70px] px-[120px]">
      <div className="flex justify-start text-[34px] items-center">
        <GiCheckMark />
        <h1 className="font-bold mx-1">Task List</h1>
      </div>
      <p className="mt-[15px]">
        Break your life to simple tasks to get things done!
        <br /> Does not matter how many tasks you done, It’s important to break
        to small tasks and be on progress.
      </p>
      <CardList />
    </div>
  );
}
