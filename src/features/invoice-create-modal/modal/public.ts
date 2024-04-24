import { createDomain } from 'effector';

const d = createDomain();

export const createModalToggle = d.event();

export const invoiceCreated = d.event();
