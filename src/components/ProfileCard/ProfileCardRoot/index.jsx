import styles from "./ProfileCardRoot.module.css";

export function ProfileCardRoot({ children, name }) {
  return (
    <div className={styles.container}>
      {children}
      <div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
      </div>
    </div>
  );
}
