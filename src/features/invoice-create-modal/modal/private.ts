import { createDomain } from 'effector';

const domain = createDomain();

export const createInvoiceEvent = domain.event();

export const $name = domain.store('');
export const setName = domain.event<string>();

export const $cost = domain.store('');
export const setCost = domain.event<string>();

export const $type = domain.store<string>('income');
export const setType = domain.event<string>();

export const $description = domain.store('');
export const setDescription = domain.event<string>();

export const $deadlineCheckbox = domain.store(false);
export const deadlineToggle = domain.event();

export const $deadline = domain.store('');
export const setDeadline = domain.event<string>();

export const $repeatCheckbox = domain.store(false);
export const repeatToggle = domain.event();

export const $repeat = domain.store('daily');
export const setRepeat = domain.event<string>('');

export const $status = domain.store('active');
export const setStatus = domain.event<string>();

export const $isOpenCreateModal = domain.store(false);

export const resetForm = domain.event();
