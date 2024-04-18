import { createDomain } from 'effector';

const d = createDomain();

export const $search = d.createStore<string>('');
export const searchEvent = d.createEvent();
