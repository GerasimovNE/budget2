import { createDomain } from 'effector';

const d = createDomain();

export const $isOpenModal = d.store(false);
export const $maxCost = d.store('');
export const setMaxCost = d.event<string>();
export const $minCost = d.store('');
export const setMinCost = d.event<string>();
export const $status = d.store('active');
export const setStatus = d.event<string>();
export const $type = d.store('task');
export const setType = d.event<string>();
export const $orderBy = d.store('cost');
export const setOrderBy = d.event<string>();
export const $orderDir = d.store('DESC');
export const setOrderDir = d.event<string>();
export const setFilterParams = d.event();
export const resetFilterParams = d.event();
export const $typeCheckBox = d.store(false);
export const typeToggle = d.event();
export const $statusCheckBox = d.store(false);
export const statusToggle = d.event();
export const $orderByCheckBox = d.store(false);
export const orderByToggle = d.event();
