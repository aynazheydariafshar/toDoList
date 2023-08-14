import React from "react";
import Card from "./card";

export default function CardList() {
  return (
    <div className="flex-wrap flex justify-between items-center mt-[46px]">
      <Card
        title="Todo"
        bgColorCard="#FEF4F3"
        titleColor="#6E1E29"
        numberOfList="2"
        colorCaption="#D4AFB4"
      >
        hhh{" "}
      </Card>
      <Card
        title="Doing"
        icon="💪"
        bgColorCard="#FFFBF2"
        titleColor="#795B19"
        numberOfList="2"
        colorCaption="#DECCA4"
      />
      <Card
        title="Done"
        icon="🎉"
        bgColorCard="#F4F9F3"
        titleColor="#286C1A"
        numberOfList="2"
        colorCaption="#BCD7B6"
      />
    </div>
  );
}
