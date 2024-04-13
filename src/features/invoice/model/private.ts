import { createDomain } from 'effector';
import { Invoice, Params } from '@/interface';

const d = createDomain();

export const $invoices = d.store<Invoice[]>([]);

export const getInvoicesEvent = d.event();
export const getInvoicesFx = d.effect<
    Params,
    { data: Invoice[]; current_page: number; last_page: number }
>();

export const deleteInvoiceFx = d.effect<number, void>();

export const $page = d.createStore<number>(1);
export const resetPage = d.createEvent();
export const setPage = d.createEvent<number>();
export const $params = d.createStore<Params>({ page: 1 });
export const $lastPage = d.createStore<number>(1);
export const $currentPage = d.createStore<number>(1);
