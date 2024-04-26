import axios from 'axios';
import { Invoice, AttachTags, Params, DateParams } from '@/interface';
export const getInvoice = (params: Params) => {
    return axios.get('api/invoices', { params: params });
};

export const createInvoice = (invoice: Invoice) => {
    return axios.post('api/invoice', invoice);
};

export const deleteInvoice = (id: number) => {
    return axios.delete(`api/invoice/${id}`);
};

export const attachTags = (payload: AttachTags) => {
    return axios.post('api/attachTags', payload);
};

export const putchInvoice = (invoice: Invoice) => {
    return axios.patch(`api/invoice/${invoice.id}`, invoice);
};

export const summaryInvoice = (dates: DateParams) => {
    return axios.get('./api/summary', {
        params: dates,
    });
};
