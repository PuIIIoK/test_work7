// Placeholder images - will be replaced with actual NFT artwork
export const NFT_IMAGES = [
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
    '/images/nft/placeholder.svg',
];

export function getRandomImage(): string {
    return NFT_IMAGES[Math.floor(Math.random() * NFT_IMAGES.length)];
}

export function getRandomEndTime(): number {
    const hoursFromNow = Math.floor(Math.random() * 72) + 1; // 1-72 hours
    return Date.now() + hoursFromNow * 60 * 60 * 1000;
}

export function getRandomBid(): number {
    return parseFloat((Math.random() * 4.5 + 0.5).toFixed(2)); // 0.5-5.0 ETH
}
