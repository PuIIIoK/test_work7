import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M2 8C6 4 10 4 14 8C18 12 22 12 26 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M2 14C6 10 10 10 14 14C18 18 22 18 26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M2 20C6 16 10 16 14 20C18 24 22 24 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <span>DiveSea</span>
                    </div>

                    <nav className={styles.links}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Term & Conditions</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>

                <div className={styles.copyright}>
                    <span className={styles.desktopText}>© 2023</span>
                    <span className={styles.mobileText}>© 2023 DiveSea All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
}
