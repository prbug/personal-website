import React from "react";

/**
 * Background component with blurred, colorful gradients for a liquid-glass effect.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Pink gradient blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-pink-400 opacity-25 blur-[100px] rounded-full animate-float-slow" />
      {/* Purple gradient blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-purple-400 opacity-25 blur-[100px] rounded-full animate-float-medium" />
      {/* Yellow gradient blob */}
      <div className="absolute top-[30%] right-[10%] w-[50vw] h-[50vw] bg-yellow-300 opacity-15 blur-[80px] rounded-full animate-float-fast" />
      {/* Extra blur overlay for glass effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />
    </div>
  );
}
