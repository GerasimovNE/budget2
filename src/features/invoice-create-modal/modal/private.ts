import { Invoice, Tag } from '@/interface';
import { createDomain } from 'effector';

const d = createDomain();

export const $tags = d.store<Tag[]>([]);
export const setTags = d.event<Tag[]>();
export const createInvoiceEvent = d.event();

export const createInvoiceFx = d.effect<Invoice, void>();

export const $name = d.store('');
export const setName = d.event<string>();

export const $cost = d.store('');
export const setCost = d.event<string>();

export const $type = d.store<string>('income');
export const setType = d.event<string>();

export const $description = d.store('');
export const setDescription = d.event<string>();

export const $deadlineCheckbox = d.store(false);
export const deadlineToggle = d.event();

export const $deadline = d.store('');
export const setDeadline = d.event<string>();

export const $repeatCheckbox = d.store(false);
export const repeatToggle = d.event();

export const $repeat = d.store('daily');
export const setRepeat = d.event<string>('');

export const $repeatCount = d.store('');
export const setRepeatCount = d.event<string>();

export const $isOpenCreateModal = d.store(false);

export const resetForm = d.event();
