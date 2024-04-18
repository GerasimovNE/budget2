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

export const $page = d.store(1);
export const resetPage = d.event();
export const setPage = d.event<number>();
export const $lastPage = d.store<number>(1);
export const $currentPage = d.store<number>(1);
