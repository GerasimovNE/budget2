import { createDomain } from 'effector';
import { AttachTags, Invoice, Tag } from '@/interface';

const d = createDomain();

export const $invoice = d.store<Invoice>({
    name: '',
    type: '',
    cost: '',
    deadline: null,
    status: '',
    tags: [],
});

export const deleteInvoiceFx = d.effect<number, void>();

export const deleteInvoiceEvent = d.event();

export const resetInvoise = d.event();
export const setTags = d.event<Tag[]>();

export const setName = d.event<string>();

export const setCost = d.event<string>();

export const setDescription = d.event<string>();

export const setType = d.event<string>();

export const setDeadline = d.event<string>();
export const setStatus = d.event<string>();
export const setRepeat = d.event<string>();

export const $deadlineCheckbox = d.store(false);
export const deadlineToggle = d.event();

export const $repeatCheckbox = d.store(false);
export const repeatToggle = d.event();

export const $repeatCount = d.store(1);
export const setRepeatCount = d.event<number>();

export const $isOpenModalChange = d.store(false);

export const attachTagsEvent = d.event();

export const changeInvoiceEvent = d.event();
export const attachTagsFx = d.effect<AttachTags, void>();

export const putchInvoiceFx = d.effect<Invoice, void>();
