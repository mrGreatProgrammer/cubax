import { AdvantageCardProps } from "@/types/app";
import React from "react";

const AdvantageCard = ({ text, icon }: AdvantageCardProps) => {
  return (
    <div className="bg-white w-[263px] h-[169px] rounded-[30px]" >
      <div className="AdvantageCard__icon--container">{icon}</div>
      <div className="AdvantageCard__text--container">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default AdvantageCard;
