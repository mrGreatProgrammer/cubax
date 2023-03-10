import { AdvantageCardProps } from "@/types/app";
import React from "react";
import {
  ConfirmIcon,
  HeatingIcon,
  HouseCalendarIcon,
  SnowIcon,
  SoundProof,
  WindowIcon,
} from "../icons";
import AdvantageCard from "./AdvantageCard";

const advantageCardsData: AdvantageCardProps[] = [
  { icon: <SnowIcon />, text: "Современная архитектура и долговечность" },
  { icon: <ConfirmIcon />, text: "Не требуется разрешение на строительство" },
  { icon: <WindowIcon />, text: "Панорамное остекление" },
  { icon: <SoundProof />, text: "Максимальная энергоэффективность" },
  { icon: <HeatingIcon />, text: "Стойкость к любым климатическим условиям" },
  { icon: <HouseCalendarIcon />, text: "Строительство от 7 дней" },
];

const AdvantageCardContainer = () => {
  return (
    <div>
      <div className="flex flex-row gap-x-5">
        {advantageCardsData.map((e) => (
          <AdvantageCard {...e} />
        ))}
      </div>
    </div>
  );
};

export default AdvantageCardContainer;
