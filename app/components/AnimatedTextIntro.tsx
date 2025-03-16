"use client";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { animationColor, animationDuration } from "./constans";

export function AnimatedTextIntro() {
  return (
    <p className="mt-4 text-base tracking-wide font-medium">
      <RoughNotationGroup show={true}>
        Hi! I&apos;m Gourab, 23 years old{" "}
        <RoughNotation
          type={"underline"}
          color={animationColor}
          animationDuration={animationDuration}
          animationDelay={350}
          padding={1}
        >
          Developer
        </RoughNotation>{" "}
        dedicated to crafting beautiful UIs and delivering better user
        experiences. I write{" "}
        <RoughNotation
          type="circle"
          color={animationColor}
          animationDuration={animationDuration}
          animationDelay={550}
        >
          efficient
        </RoughNotation>
        ,{" "}
        <RoughNotation
          type="box"
          color={animationColor}
          animationDuration={animationDuration}
          animationDelay={650}
        >
          maintainable code
        </RoughNotation>{" "}
        and love solving complex{" "}
        <RoughNotation
          type="crossed-off"
          color="#f24405"
          animationDuration={animationDuration}
          animationDelay={750}
        >
          problems
        </RoughNotation>
        .
      </RoughNotationGroup>
    </p>
  );
}
