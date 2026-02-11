"use client";

import dynamic from "next/dynamic";
import sketch from "./FractalSketch";
const Sketch = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  {
    ssr: false,
  },
);

export default function FractalCanvas() {
  return (
    <div className="hidden md:flex w-full max-w-[700px] justify-center items-center">
      <Sketch sketch={sketch} />
    </div>
  );
}
