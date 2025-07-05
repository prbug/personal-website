import styles from "../page.module.css";

/**
 * Title component that displays the main heading of the page.
 */
export default function Title(props: { text: string }): JSX.Element {
  return (
    <div className={styles.titleSection}>
      <h1 className={styles.title}>{props.text}</h1>
    </div>
  );
}
