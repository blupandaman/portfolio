"use client";

import { useEffect } from "react";
import { Gradient } from "whatamesh";

export function MeshBackground() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <canvas
        id="gradient-canvas"
        className="absolute left-0 top-0 -z-10 size-full"
        data-transition-in
      />
      <div className="absolute left-0 top-0 z-0 size-full bg-gradient-to-b from-transparent to-primary to-85%" />
    </>
  );
}
