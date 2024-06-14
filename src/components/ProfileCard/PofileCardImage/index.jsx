import styles from "./ProfileCardImage.module.css";

export function ProfileCardImage({ src }) {
  return (
    <div className={styles.container}>
      <img src={src} alt="Profile Image" />
    </div>
  );
}
