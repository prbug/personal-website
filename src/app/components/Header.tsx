import React from "react";

/**
 * Header component that displays the author attribution and link.
 */
export default function Header(props: { name: string }): JSX.Element {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md rounded-xl shadow-lg border border-white/10">
      <div className="flex items-center gap-2 p-8 lg:p-0 lg:pointer-events-auto pointer-events-none">
        By{" "}
        <a
          className="flex items-center gap-2 p-8 lg:p-0 lg:pointer-events-auto pointer-events-none text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-100"
          href="https://www.linkedin.com/in/chandleroking"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </a>
      </div>
    </div>
  );
}
