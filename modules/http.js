import axios from 'axios';

const baseURL = 'https://royalpass-web.onrender.com';

export async function getData(url) {
    try {
        const response = await axios.get(`${baseURL}${url}`);

        return response.data.data;

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

async function postData(url, data) {
    try {
        const response = await axios.post(`${baseURL}${url}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error.message);
        throw error;
    }
}

async function removeData(url) {
    try {
        const response = await axios.delete(`${baseURL}${url}`);
        return response.data;
    } catch (error) {
        console.error('Error removing data:', error.message);
        throw error;
    }
}

async function patchData(url, data) {
    try {
        const response = await axios.patch(`${baseURL}${url}`, data);
        return response.data;
    } catch (error) {
        console.error('Error patching data:', error.message);
        throw error;
    }
}