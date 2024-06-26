"use client";
import React, { useState } from "react";
import "./card.css";
import custom from "./custom.module.scss";
import clsx from "clsx";
type TCardProps = {
  something?: string;
};

const Card = ({ something }: TCardProps) => {
  const [isExpanding, setIsExpanding] = useState<boolean>(false);
  return (
    <>
      <button
        className="p-4 rounded-sm text-sm font-light font-lemonada bg-card"
        onClick={() => setIsExpanding(!isExpanding)}
      >
        Click here to expand
      </button>
      <div
        className={clsx("card", {
          [custom.card]: isExpanding,
        })}
      >
        This is a card
      </div>
    </>
  );
};

export default Card;
