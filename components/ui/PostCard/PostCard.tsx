import SubmitBtn from "@/components/forms/btn/SubmitBtn";
import { PostCardProps } from "@/types/app";
import Image from "next/image";
import React from "react";
import styles from "./PostCard.module.scss";

const PostCard = ({ title, text, img, footerList }: PostCardProps) => {
  return (
    <article className={`${styles.postcard} max-w-[587px]`}>
      <div className="postcard--title__container">
        <h5 className="text-[#63AFCD] font-bold text-4xl">{title}</h5>
        <h6 className="font-normal text-2xl">{text}</h6>
      </div>
      <div className="postcard--img__container flex justify-center">
        <Image
          alt="CUBAXдля частного домостроения"
          src={img}
          width="300"
          height={"275"}
        />
      </div>
      <div className="postcard--footer flex flex-row space-x-14">
        <ul className="postcard--footer-list grid grid-cols-2 gap-x-2 gap-y-4">
          {footerList.map((e) => (
            <li className="flex flex-row items-center gap-x-5">
              <span>{e.icon}</span>
              <span>{e.text}</span>
            </li>
          ))}
        </ul>
        <div className="postcard--footer-btn__container">
          <SubmitBtn
            onClick={() => console.log("")}
            txt="Подробнее"
            disabled={false}
          />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
