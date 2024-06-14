import styles from "./LinkRoot.module.css";

export function LinkRoot({ href, text, children }) {
  return (
    <div className={styles.container}>
      <a href={href}>{text}</a>
      {children}
    </div>
  );
}
