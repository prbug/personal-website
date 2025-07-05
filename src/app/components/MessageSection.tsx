import { useState, useEffect } from "react";
import styles from "../page.module.css";

interface Message {
  message: string;
  timestamp: string;
}

export default function MessageSection(): JSX.Element {
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className={styles.messageSection}>
      <h3 className={styles.messageTitle}>Backend Message</h3>

      {loading && (
        <div className={styles.loadingText}>
          Loading message from Go backend...
        </div>
      )}

      {error && <div className={styles.errorText}>Error: {error}</div>}

      {message && (
        <div className={styles.messageContent}>
          <p className={styles.messageText}>{message.message}</p>
          <p className={styles.messageTimestamp}>
            {new Date(message.timestamp).toLocaleString()}
          </p>
        </div>
      )}

      <button
        onClick={fetchMessage}
        disabled={loading}
        className={styles.refreshButton}
      >
        {loading ? "Loading..." : "Refresh Message"}
      </button>
    </div>
  );
}
