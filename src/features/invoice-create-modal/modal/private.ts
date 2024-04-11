import { createDomain } from 'effector';

const domain = createDomain();

export const createInvoiceEvent = domain.event();

export const $name = domain.store('');
export const setName = domain.event<string>();
export const resetName = domain.event();

export const $cost = domain.store('');
export const setCost = domain.event<string>();
export const resetCost = domain.event();

export const $type = domain.store<string>('income');
export const setType = domain.event<string>();
export const resetType = domain.event();

export const $description = domain.store('');
export const setDescription = domain.event<string>();
export const resetDescription = domain.event();

export const $deadlineCheckbox = domain.store(false);
export const setDeadlineCheckbox = domain.event<boolean>();
export const resetDeadlineCheckbox = domain.event();
export const $deadline = domain.store('');
export const setDeadline = domain.event<string>();
export const resetDeadline = domain.event();

export const $repeatCheckbox = domain.store(false);
export const setRepeatCheckbox = domain.event<boolean>();
export const resetRepeatCheckbox = domain.event();
export const $repeat = domain.store('daily');
export const setRepeat = domain.event<string>('');
export const resetRepeat = domain.event();

export const $status = domain.store('active');
export const setStatus = domain.event<string>();
export const resetStatus = domain.event();

export const $isOpenCreateModal = domain.store(false);
