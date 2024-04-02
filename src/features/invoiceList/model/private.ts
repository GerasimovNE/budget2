import { createDomain } from 'effector';
import { Invoice } from '@/interface';

const domain = createDomain();

export const $invoices = domain.store<Invoice[]>([]);

export const getInvoicesFx = domain.effect<void, Invoice[]>();

export const deleteInvoiceFx = domain.effect<number, void>();

export const $test = domain.store('');

export const setTest = domain.event<string>();
