export async function fetchNFTList() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/nfts/list');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching NFT list:', error);
        throw error;
    }
}
