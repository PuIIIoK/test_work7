import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NFTState, NFT } from '@/types/nft';
import { fetchNFTList } from '@/lib/api/nfts';
import { getRandomImage, getRandomEndTime, getRandomBid } from '@/lib/utils/generateNFTData';

const initialState: NFTState = {
    nfts: [],
    loading: false,
    error: null,
};

export const fetchNFTs = createAsyncThunk('nft/fetchNFTs', async () => {
    const data = await fetchNFTList();

    // Transform API data and add generated fields
    const nfts: NFT[] = data.slice(0, 12).map((item: any) => ({
        id: item.id,
        name: item.name,
        image: getRandomImage(),
        endTime: getRandomEndTime(),
        currentBid: getRandomBid(),
    }));

    return nfts;
});

const nftSlice = createSlice({
    name: 'nft',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNFTs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNFTs.fulfilled, (state, action) => {
                state.loading = false;
                state.nfts = action.payload;
            })
            .addCase(fetchNFTs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch NFTs';
            });
    },
});

export default nftSlice.reducer;
