import { useState, useEffect } from "react";

interface Message {
  message: string;
  timestamp: string;
}

/**
 * MessageSection component that displays and manages backend API communication.
 * Fetches messages from the Go backend API and provides a refresh mechanism.
 */
export default function MessageSection(): JSX.Element {
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches a message from the backend API.
   * Handles loading states, error handling, and API URL logic for different environments.
   */
  const fetchMessage = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simple API URL logic
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080/api/hello"
          : "/api/hello";

      console.log("Fetching from:", apiUrl);
      const response = await fetch(apiUrl);
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received data:", data);
      setMessage(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4 text-center">Backend Message</h3>

      {loading && (
        <div className="text-center text-gray-400">
          Loading message from Go backend...
        </div>
      )}

      {error && <div className="text-center text-red-400">Error: {error}</div>}

      {message && (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-200">{message.message}</p>
          <p className="text-sm text-gray-400 mt-2">
            {new Date(message.timestamp).toLocaleString()}
          </p>
        </div>
      )}

      <button
        onClick={fetchMessage}
        disabled={loading}
        className="mt-4 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-150 hover:bg-blue-700 disabled:bg-gray-500"
      >
        {loading ? "Loading..." : "Refresh Message"}
      </button>
    </div>
  );
}
