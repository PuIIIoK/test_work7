'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Timer from './Timer';
import styles from './NFTCard.module.scss';

interface NFTCardProps {
    name: string;
    image: string;
    endTime: number;
    currentBid: number;
    index: number;
}

export default function NFTCard({ name, image, endTime, currentBid, index }: NFTCardProps) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className={styles.timer}>
                    <Timer endTime={endTime} />
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.bidInfo}>
                    <div className={styles.bidSection}>
                        <span className={styles.label}>Current bid</span>
                        <div className={styles.priceContainer}>
                            <svg className={styles.ethIcon} width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 0L6.85 0.51V9.55L7 9.73L11.38 7.14L7 0Z" fill="currentColor" />
                                <path d="M7 0L2.62 7.14L7 9.73V5.22V0Z" fill="currentColor" opacity="0.6" />
                                <path d="M7 10.54L6.91 10.66V13.68L7 13.96L11.38 7.95L7 10.54Z" fill="currentColor" />
                                <path d="M7 13.96V10.54L2.62 7.95L7 13.96Z" fill="currentColor" opacity="0.6" />
                            </svg>
                            <span className={styles.price}>{currentBid}</span>
                        </div>
                    </div>
                    <button className={styles.bidButton}>PLACE BID</button>
                </div>
            </div>
        </motion.div>
    );
}
