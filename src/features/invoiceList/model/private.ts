import { createDomain } from 'effector';
import { Invoice } from '@/interface';

const domain = createDomain();

export const $invoices = domain.store<Invoice[]>([]);

export const getInvoicesFx = domain.effect<void, Invoice[]>();

export const createInvoiceFx = domain.effect<Invoice, void>();
export const createInvoiceEvent = domain.event();
export const deleteInvoiceFx = domain.effect<number, void>();

export const $name = domain.store('');
export const setName = domain.event<string>();
export const resetName = domain.event();

export const $cost = domain.store(0);
export const setCost = domain.event<number>();
export const resetCost = domain.event();

export const $type = domain.store<'task' | 'expense' | 'income'>('income');
export const setType = domain.event<'task' | 'expense' | 'income'>();
export const resetType = domain.event();

export const $description = domain.store('');
export const setDescription = domain.event<string>();

export const $deadline = domain.store('');
export const setDeadline = domain.event<string>();

export const $isOpenCreateModal = domain.store(false);
export const openCreateModal = domain.event();
export const closeCreateModal = domain.event();
