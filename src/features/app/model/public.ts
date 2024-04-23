import { createDomain } from 'effector';

const d = createDomain();

export const $search = d.store<string>('');
export const searchEvent = d.event();
