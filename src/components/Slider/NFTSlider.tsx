'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import NFTCard from '../NFTCard/NFTCard';
import { NFT } from '@/types/nft';
import styles from './NFTSlider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface NFTSliderProps {
    nfts: NFT[];
}

export default function NFTSlider({ nfts }: NFTSliderProps) {
    return (
        <div className={styles.sliderContainer}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={32}
                slidesPerView="auto"
                navigation={{
                    nextEl: `.${styles.navNext}`,
                    prevEl: `.${styles.navPrev}`,
                }}
                className={styles.swiper}
            >
                {nfts.map((nft, index) => (
                    <SwiperSlide key={nft.id}>
                        <NFTCard
                            name={nft.name}
                            image={nft.image}
                            endTime={nft.endTime}
                            currentBid={nft.currentBid}
                            index={index}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.navigation}>
                <motion.button
                    className={`${styles.navButton} ${styles.navPrev}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    ←
                </motion.button>
                <motion.button
                    className={`${styles.navButton} ${styles.navNext}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    →
                </motion.button>
            </div>
        </div>
    );
}
