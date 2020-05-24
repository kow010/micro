let url = 'http://localhost:8000/api';

if(process.env.NODE_ENV === 'production') {
    url = 'http://localhost:8000/api';
}

export const BASE_URL = url;
