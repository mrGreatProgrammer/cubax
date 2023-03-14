import { AdvantageCardProps } from "@/types/app";
import React from "react";

const AdvantageCard = ({ text, icon }: AdvantageCardProps) => {
  return (
    <article className="bg-white w-[263px] h-[169px] rounded-[30px] pt-10 pl-11 pb-8 pr-7" >
      <div className="AdvantageCard__icon--container">{icon}</div>
      <div className="AdvantageCard__text--container">
        <h3 className="mt-5 text-sm font-normal" >{text}</h3>
      </div>
    </article>
  );
};

export default AdvantageCard;
