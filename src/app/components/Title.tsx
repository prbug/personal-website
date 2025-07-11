import React from "react";

/**
 * Title component that displays the main heading of the page.
 */
export default function Title(props: { text: string }): JSX.Element {
  return (
    <div className="relative flex items-center">
      {/* Background effects */}
      <div className="absolute h-72 w-96 lg:h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-transparent to-[#7aa2f7] opacity-10 blur-2xl"></div>
      <div className="absolute z-[-20] h-44 w-60 translate-x-1/3 bg-conic-gradient from-[#7aa2f7] to-[#7dcfff] opacity-40 blur-2xl"></div>
      <div className="z-[-1]">
        <h1 className="text-4xl font-fira-code font-bold text-center text-[#7dcfff]">
          {props.text}
        </h1>
      </div>
    </div>
  );
}
