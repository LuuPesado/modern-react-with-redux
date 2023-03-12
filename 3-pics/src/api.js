import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 2noKqU_Ym03Y1Oqp5QmfxFpYEJ_NYV_G9MUVML_wbFw',
        },
        params:{
            query: term,
        }
    });
    return response.data.results
}

export default searchImages