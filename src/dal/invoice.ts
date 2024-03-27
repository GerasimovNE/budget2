import axios from 'axios';
import { Invoice } from '@/interface';

type Params = {};
export const getInvoice = () => {
    return axios.get('api/invoices');
};

export const createInvoice = (invoice: Invoice) => {
    return axios.post('api/invoice', invoice);
};

export const deleteInvoice = (id: number) => {
    return axios.delete(`api/invoice/${id}`);
};
