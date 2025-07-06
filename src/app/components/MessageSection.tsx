import { useState } from "react";

/**
 * MessageSection component that displays a welcome message.
 * Previously fetched from Go backend, now shows static content.
 */
export default function MessageSection(): JSX.Element {
  const [isRefreshed, setIsRefreshed] = useState(false);

  const handleRefresh = () => {
    setIsRefreshed(true);
    // Reset after 2 seconds
    setTimeout(() => setIsRefreshed(false), 2000);
  };

  return (
    <div className="mt-8 p-6 bg-[#1a1b26]/40 backdrop-blur-xl rounded-lg shadow-lg max-w-md w-full border border-[#7aa2f7]/20 font-fira-code">
      <h3 className="text-xl font-fira-code font-semibold mb-4 text-center text-[#7dcfff]">
        Welcome Message
      </h3>

      <div className="text-center">
        <p className="text-lg font-fira-code font-medium text-[#a9b1d6]">
          {isRefreshed ? "Thanks for visiting! 🚀" : "Hello from Next.js! 👋"}
        </p>
        <p className="text-sm font-fira-code text-[#565a6e] mt-2">
          {new Date().toLocaleString()}
        </p>
      </div>

      <button
        onClick={handleRefresh}
        className="mt-4 w-full bg-[#7aa2f7]/80 text-[#1a1b26] font-fira-code font-medium py-2 px-4 rounded transition-colors duration-150 hover:bg-[#7aa2f7]"
      >
        {isRefreshed ? "Refreshed!" : "Refresh Message"}
      </button>
    </div>
  );
}
