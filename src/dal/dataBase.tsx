import axios from 'axios';
import { saveAs } from 'file-saver';

export const exportDb = async () => {
    const { data } = await axios.get('/api/DBexport');
    const bd = new Blob([JSON.stringify(data)], { type: 'application/json' });
    saveAs(bd, data.BCM_ImageName);
};

export const importDb = (db: string) => {
    return axios.post('/api/DBimport', db);
};
