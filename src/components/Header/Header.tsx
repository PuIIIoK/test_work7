'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M2 8C6 4 10 4 14 8C18 12 22 12 26 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M2 14C6 10 10 10 14 14C18 18 22 18 26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M2 20C6 16 10 16 14 20C18 24 22 24 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className={styles.logoText}>DiveSea</span>
                    </Link>

                    <nav className={styles.nav}>
                        <Link href="/">DISCOVER</Link>
                        <Link href="/creators">CREATORS</Link>
                        <Link href="/sell">SELL</Link>
                        <Link href="/stats">STATS</Link>
                    </nav>

                    <button
                        className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className={styles.mobileMenuHeader}>
                            <Link href="/" className={styles.mobileLogo} onClick={() => setIsMobileMenuOpen(false)}>
                                <div className={styles.logoIcon}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M2 8C6 4 10 4 14 8C18 12 22 12 26 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                        <path d="M2 14C6 10 10 10 14 14C18 18 22 18 26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                        <path d="M2 20C6 16 10 16 14 20C18 24 22 24 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span>DiveSea</span>
                            </Link>
                            <button
                                className={styles.closeButton}
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <nav className={styles.mobileNav}>
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>DISCOVER</Link>
                            <Link href="/creators" onClick={() => setIsMobileMenuOpen(false)}>CREATORS</Link>
                            <Link href="/sell" onClick={() => setIsMobileMenuOpen(false)}>SELL</Link>
                            <Link href="/stats" onClick={() => setIsMobileMenuOpen(false)}>STATS</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
