'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchNFTs } from '@/store/slices/nftSlice';
import Header from '@/components/Header/Header';
import NFTSlider from '@/components/Slider/NFTSlider';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.scss';

export default function Home() {
    const dispatch = useAppDispatch();
    const { nfts, loading, error } = useAppSelector((state) => state.nft);

    useEffect(() => {
        dispatch(fetchNFTs());
    }, [dispatch]);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Weekly - Top NFT</h1>
                    {loading && <div className={styles.loading}>Loading NFTs...</div>}
                    {error && <div className={styles.error}>Error: {error}</div>}
                    {!loading && !error && nfts.length > 0 && (
                        <NFTSlider nfts={nfts} />
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
