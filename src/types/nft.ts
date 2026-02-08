export interface NFT {
    id: string;
    name: string;
    image: string;
    endTime: number;
    currentBid: number;
}

export interface NFTState {
    nfts: NFT[];
    loading: boolean;
    error: string | null;
}
