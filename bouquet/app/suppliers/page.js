import Link from 'next/link';
import styles from '../page.module.css';

export default function Suppliers() {
    return (
        <div className={styles.header}>
        <h1 className={styles.title}>This is suppliers</h1>
        <button className={styles.button}><Link href="/">Home</Link></button>
        <button className={styles.button}><Link href="/checklist">Checklist</Link></button>
        <button className={styles.button}><Link href="/guests">Guests</Link></button>
        <button className={styles.button}><Link href="/program">Program</Link></button>
        </div>
    );
}
