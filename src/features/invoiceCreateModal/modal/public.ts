import { Invoice } from '@/interface';
import { createDomain } from 'effector';

const domain = createDomain();

export const createModalToggle = domain.event();
export const createInvoiceFx = domain.effect<Invoice, void>();
