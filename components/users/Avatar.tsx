import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

const IMAGE_SIZE = 48;

export function Avatar({
  otherStyles,
  name,
}: {
  otherStyles: string;
  name: string;
}) {
  console.log(name);
  return (
    <div
      className={`${otherStyles}  h-9 w-9 styles.avatar`}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className={styles.avatar_picture}
        alt={name}
      />
    </div>
  );
}
