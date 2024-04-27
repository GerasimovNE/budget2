import { createDomain } from 'effector';

const d = createDomain();
export const setSearch = d.event<string>();
export const $isOpenBurger = d.store(false);
export const burgerToggle = d.event();
