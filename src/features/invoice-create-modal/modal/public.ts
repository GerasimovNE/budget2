import { Invoice } from '@/interface';
import { createDomain } from 'effector';

const d = createDomain();

export const createModalToggle = d.event();
export const createInvoiceFx = d.effect<Invoice, void>();
