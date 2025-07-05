import styles from "../page.module.css";

export default function FeatureGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          Frontend <span className={styles.cardArrow}>→</span>
        </h2>
        <p className={styles.cardDescription}>
          Built with Next.js, TypeScript, and React
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          Backend <span className={styles.cardArrow}>→</span>
        </h2>
        <p className={styles.cardDescription}>
          Powered by Go and Gin framework
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          Deployment <span className={styles.cardArrow}>→</span>
        </h2>
        <p className={styles.cardDescription}>
          Hosted on Vercel with serverless functions
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>
          API <span className={styles.cardArrow}>→</span>
        </h2>
        <p className={styles.cardDescription}>
          RESTful API with JSON responses
        </p>
      </div>
    </div>
  );
}
