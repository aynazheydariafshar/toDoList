import React from "react";

export default function Card({
  title,
  icon = "",
  bgColorCard,
  titleColor,
  numberOfList,
  colorCaption,
  children
}) {
  return (
    <div
      style={{ backgroundColor: bgColorCard }}
      className="w-[340px] h-[700px] rounded-[10px] px-[20px] pt-[20px] pb-[30px]"
    >
      <div className="flex justify-between items-center">
        <p style={{ color: titleColor }} className="font-bold">
          {title} {icon}
        </p>
        <p
          style={{ color: colorCaption }}
          className="text-[12px]"
        >{`${numberOfList} Tasks`}</p>
      </div>
      {children}
    </div>
  );
}
