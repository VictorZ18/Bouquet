import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>This is home</h1>
        <button className={styles.button}><Link href="/suppliers">Suppliers</Link></button>
        <button className={styles.button}><Link href="/checklist">Checklist</Link></button>
        <button className={styles.button}><Link href="/guests">Guests</Link></button>
        <button className={styles.button}><Link href="/program">Program</Link></button>
    </div>
  );
};


