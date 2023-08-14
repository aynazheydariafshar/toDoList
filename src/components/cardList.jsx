import React from "react";
import Card from "./card";

export default function CardList() {
  return (
    <div className="flex-wrap flex justify-between items-center gap-[20px] mt-[46px]">
      <Card title="Todo" bgColorCard="#FEF4F3" titleColor="#6E1E29" />
      <Card
        title="Doing"
        icon="💪"
        bgColorCard="#FFFBF2"
        titleColor="#795B19"
      />
      <Card title="Done" icon="🎉" bgColorCard="#F4F9F3" titleColor="#286C1A" />
    </div>
  );
}
