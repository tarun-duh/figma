import CursorSVG from "@/public/assets/CursorSVG";
import { transform } from "next/dist/build/swc";
import React from "react";
type Props = {
  color: string;
  x: number;
  y: number;
  message?: string;
};

const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 "
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />
      {message && (
        <div
          style={{
            backgroundColor: color,
          }}
          className={`absolute left-2 top-5  px-4 py-2 text-sm leading-relaxed text-white rounded-[20px] `}
        >
          <p className="z-10 whitespace-nowrap text-white placeholder-blue-300 outline-none">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
