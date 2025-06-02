"use client";
import { zodiakSerif } from "@/app/fonts";
import { RoughNotation } from "react-rough-notation";

export default function Intro() {
  return (
    <div>
      <h1
        className={`${zodiakSerif.className} mt-4 text-2xl font-bold tracking-wide text-balance md:text-3xl`}
      >
        Gourab S. — I Design, I Develop,{" "}
        <RoughNotation
          type="highlight"
          color="#fd510d"
          show={true}
          animationDelay={650}
        >
          I Deliver.
        </RoughNotation>
      </h1>
    </div>
  );
}
