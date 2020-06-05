import axios from 'axios';

const KEY = 'AIzaSyC5YRUgDjmDbcGjuP3IP_SLmwO8PXk_WmY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});