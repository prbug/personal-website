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
      className="absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up scroll-fade-out"
    >
      <div className="text-xs sm:text-sm font-fira-code text-[#e0af68]/80 leading-tight">
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
    <div className="fixed top-4 sm:top-8 left-4 sm:left-8 text-xs sm:text-sm font-fira-code text-[#a9b1d6]/80 bg-[#1a1b26]/30 backdrop-blur-xl px-2 sm:px-3 py-1 rounded border border-[#7aa2f7]/20 flex items-center gap-1 sm:gap-2 z-10 max-w-[calc(100vw-2rem)]">
      <span className="truncate">{fileName}</span>
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
    <div className="fixed top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-1 sm:gap-2 z-10">
      <a
        href={props.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-fira-code text-[#a9b1d6]/80 bg-[#1a1b26]/30 backdrop-blur-xl rounded border border-[#7aa2f7]/20 hover:text-[#7aa2f7] transition-colors flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8"
      >
        <LinkedInIcon />
      </a>
      <a
        href={props.gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-fira-code text-[#a9b1d6]/80 bg-[#1a1b26]/30 backdrop-blur-xl rounded border border-[#7aa2f7]/20 hover:text-[#7aa2f7] transition-colors flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8"
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
  // Create a shorter version for mobile
  const mobileText = "# Chandler King";
  const fullText = text;
  
  return (
    <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-fira-code font-semibold text-[#7dcfff]/95 px-6 sm:px-8 md:px-12 text-center w-full">
      {/* Mobile version */}
      <div className="flex items-center justify-center sm:hidden">
        <div
          className="inline-block overflow-hidden whitespace-nowrap"
          style={
            {
              "--text-length": `${mobileText.length}ch`,
              animation: `typing 1s steps(${mobileText.length}, end) forwards`,
            } as React.CSSProperties
          }
        >
          {mobileText}
        </div>
        <div
          className="w-2 h-6 bg-current ml-1 rounded-sm flex-shrink-0"
          style={{
            animation: `blink-caret .75s step-end infinite`,
          }}
        />
      </div>
      
      {/* Desktop version */}
      <div className="hidden sm:flex items-center justify-center">
        <div
          className="inline-block overflow-hidden whitespace-nowrap"
          style={
            {
              "--text-length": `${fullText.length}ch`,
              animation: `typing 1s steps(${fullText.length}, end) forwards`,
            } as React.CSSProperties
          }
        >
          {fullText}
        </div>
        <div
          className="w-3 h-8 md:w-4 md:h-10 bg-current ml-2 rounded-sm flex-shrink-0"
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
