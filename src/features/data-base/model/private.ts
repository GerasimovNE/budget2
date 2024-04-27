import { createDomain } from 'effector';

const d = createDomain();

export const importDbFx = d.effect<Blob | null, void>();
export const exportDbFx = d.effect<null, void>();
export const $db = d.store<Blob | null>(null);
export const setDb = d.event<Blob | null>();

export const resetDb = d.event();
export const importDbEvent = d.event();

export const $isOpenDbModal = d.store(false);
