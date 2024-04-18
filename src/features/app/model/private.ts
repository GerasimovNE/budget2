import { createDomain } from 'effector';

const d = createDomain();

export const setSearch = d.createEvent<string>();
