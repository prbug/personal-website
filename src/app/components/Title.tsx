import React from "react";

/**
 * Title component that displays the main heading of the page.
 */
export default function Title(props: { text: string }): JSX.Element {
  return (
    <div className="relative flex items-center">
      {/* Background effects */}
      <div className="absolute h-72 w-96 lg:h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-transparent to-blue-600 opacity-10 blur-2xl"></div>
      <div className="absolute z-[-20] h-44 w-60 translate-x-1/3 bg-conic-gradient from-blue-800 to-blue-600 opacity-40 blur-2xl"></div>
      <div className="z-[-1]">
        <h1 className="text-4xl font-bold text-center">{props.text}</h1>
      </div>
    </div>
  );
}
