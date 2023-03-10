import React from "react";

interface btnProps {
  txt: string;
  onClick: any;
  disabled?: boolean;
}

const SubmitBtn = ({ onClick, txt, disabled }: btnProps) => {
  return (
    <div>
      <button
        className="bg-secondary text-white rounded-[35px] font-bold text-base tracking-wider px-[23px] py-[21px]"
        onClick={onClick}
        disabled={disabled}
      >
        {txt}
      </button>
    </div>
  );
};

export default SubmitBtn;
