import React, { useEffect, useRef } from "react";
import { FileIcon, LinkedInIcon, GitHubIcon } from "./icons";

/**
 * A component with a message advising the user to scroll. It fades in when
 * the page is loaded, but fades out when scrolling down past it.
 */
function ScrollMessage({ text }: { text: string }): JSX.Element {
  // Reference to the DOM element for direct style manipulation
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeEnd = windowHeight * 0.5; // Start fading after 50% of viewport height

      // Calculate opacity: 1 at top, 0 when scrolled past fadeEnd
      const opacity = Math.max(0, 1 - scrollY / fadeEnd);
      elementRef.current.style.setProperty(
        "--scroll-opacity",
        opacity.toString(),
      );
    };

    // Add scroll listener and clean up on unmount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elementRef}
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up scroll-fade-out"
    >
      <div className="text-sm font-fira-code text-white/60 leading-tight">
        <pre className="whitespace-pre">{text}</pre>
      </div>
    </div>
  );
}

/**
 * Filename component with neovim-style styling
 */
function FileName({ fileName }: { fileName: string }): JSX.Element {
  return (
    <div className="fixed top-8 left-8 text-sm font-fira-code text-white/60 bg-black/20 backdrop-blur-sm px-3 py-1 rounded border border-white/10 flex items-center gap-2 z-10">
      <span>{fileName}</span>
      <FileIcon />
    </div>
  );
}

/**
 * Social icons component with neovim-style styling
 */
function SocialIcons(props: {
  linkedInUrl: string;
  gitHubUrl: string;
}): JSX.Element {
  return (
    <div className="fixed top-8 right-8 flex items-center gap-2 z-10">
      <a
        href={props.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-fira-code text-white/60 bg-black/20 backdrop-blur-sm rounded border border-white/10 hover:text-white/80 transition-colors flex items-center justify-center w-8 h-8"
      >
        <LinkedInIcon />
      </a>
      <a
        href={props.gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-fira-code text-white/60 bg-black/20 backdrop-blur-sm rounded border border-white/10 hover:text-white/80 transition-colors flex items-center justify-center w-8 h-8"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

/**
 * Typed text component with cursor animation
 */
function TypedText({ text }: { text: string }): JSX.Element {
  return (
    <div className="text-4xl font-fira-code text-white/85">
      <div className="flex items-center">
        <div
          className="inline-block overflow-hidden whitespace-nowrap"
          style={
            {
              "--text-length": `${text.length}ch`,
              animation: `typing 1s steps(${text.length}, end) forwards`,
            } as React.CSSProperties
          }
        >
          {text}
        </div>
        <div
          className="w-4 h-10 bg-current ml-2 rounded-sm"
          style={{
            animation: `blink-caret .75s step-end infinite`,
          }}
        />
      </div>
    </div>
  );
}

/**
 * Intro component with neovim-like animation spelling out the text.
 */
export default function Intro(props: {
  text: string;
  fileName: string;
}): JSX.Element {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <FileName fileName={props.fileName} />
      <SocialIcons
        linkedInUrl="https://www.linkedin.com/in/chandleroking"
        gitHubUrl="https://github.com/prbug"
      />
      <TypedText text={props.text} />
      <ScrollMessage text="scroll to learn more ↓" />
    </div>
  );
}
