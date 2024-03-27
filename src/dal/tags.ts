import axios from 'axios';

export const getTags = () => {
    return axios.get('/api/tags');
};

export const createTag = (name: string) => {
    return axios.post('/api/tag', { name });
};

export const deleteTag = (id: number) => {
    return axios.delete(`/api/tag/${id}`);
};
