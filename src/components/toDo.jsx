import React, { useState } from "react";
import Card from "./card";

export default function ToDo() {
  const [check, setCheck] = useState(false);
  return (
    <Card
      title="Todo"
      bgColorCard="#FEF4F3"
      titleColor="#6E1E29"
      numberOfList="2"
      colorCaption="#D4AFB4"
    >
      <div>
        <div className="border-[1px] py-[12px] px-[10px] mt-[20px] border-[#F3E1DF] bg-white rounded-[4px] flex items-center gap-[10px]">
          <input
            value={check}
            onClick={() => setCheck(!check)}
            type="checkbox"
            className="appearance-none w-[16px] h-[16px] border-[1px] border-[#EDD6D3] rounded-none"
          />
          <p>text</p>
        </div>
      </div>
    </Card>
  );
}
