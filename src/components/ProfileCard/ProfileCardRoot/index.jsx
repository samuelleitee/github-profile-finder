import styles from "./ProfileCardRoot.module.css";

export function ProfileCardRoot({ children }) {
  return (
    <div className={styles.container}>
      <div>
        <h2>Nome</h2>
      </div>
      {children}
    </div>
  );
}
