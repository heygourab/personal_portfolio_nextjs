"use client";

import { RoughNotation } from "react-rough-notation";
import { animationColor } from "./constans";

export function AnimatedTitle({
  title,
  color = animationColor,
}: {
  title: string;
  color?: string;
}) {
  return (
    <RoughNotation type={"highlight"} color={color} show>
      {title}
    </RoughNotation>
  );
}
