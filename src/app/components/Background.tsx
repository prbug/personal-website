import React from "react";

/**
 * Background component with blurred, colorful gradients for a liquid-glass effect.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Pink gradient blob */}
      <div className="absolute top-4 left-4 w-96 h-96 sm:top-8 sm:left-8 sm:w-[40vh] sm:h-[40vh] md:top-[-10%] md:left-[-10%] md:w-[70vw] md:h-[70vw] bg-pink-400 opacity-30 sm:opacity-25 blur-[100px] sm:blur-[120px] md:blur-[100px] rounded-full animate-float-slow" />
      {/* Purple gradient blob */}
      <div className="absolute bottom-4 right-4 w-96 h-96 sm:bottom-8 sm:right-8 sm:w-[40vh] sm:h-[40vh] md:bottom-[-10%] md:right-[-10%] md:w-[70vw] md:h-[70vw] bg-purple-400 opacity-30 sm:opacity-25 blur-[100px] sm:blur-[120px] md:blur-[100px] rounded-full animate-float-medium" />
      {/* Yellow gradient blob */}
      <div className="absolute top-1/3 right-4 w-80 h-80 sm:top-1/2 sm:right-8 sm:w-[35vh] sm:h-[35vh] md:top-[30%] md:right-[10%] md:w-[50vw] md:h-[50vw] bg-yellow-300 opacity-20 sm:opacity-15 blur-[80px] sm:blur-[100px] md:blur-[80px] rounded-full animate-float-fast" />
      {/* Extra blur overlay for glass effect - reduced on mobile */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/20 md:bg-black/60 backdrop-blur-sm md:backdrop-blur-2xl" />
    </div>
  );
}
