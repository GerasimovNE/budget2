import { createDomain } from 'effector';
import { Invoice } from '@/interface';

const d = createDomain();

export const setInvoice = d.event<Invoice>();

export const invoiceIsChanged = d.event();
export const changeModalToggle = d.event();
