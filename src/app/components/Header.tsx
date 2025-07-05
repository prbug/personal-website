import styles from "../page.module.css";

/**
 * Header component that displays the author attribution and link.
 */
export default function Header(props: { name: string }): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          By{" "}
          <a
            className={styles.footerLink}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
