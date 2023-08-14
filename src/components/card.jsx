import React from "react";

export default function Card({ title, icon = "", bgColorCard, titleColor }) {
  return (
    <div
      style={{ backgroundColor: bgColorCard }}
      className="w-[340px] h-[700px] rounded-[10px] px-[20px] pt-[20px] pb-[30px]"
    >
      <div>
        <p style={{ color: titleColor }} className="font-bold">
          {title} {icon}
        </p>
      </div>
    </div>
  );
}
