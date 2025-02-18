import axios from 'axios';

const API_KEY = '48925713-6281e076b4b07f0ec4ad03690';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        });
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}