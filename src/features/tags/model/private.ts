import { createDomain } from 'effector';
import { Tag } from '@/interface/tag';

const domain = createDomain();

export const $tags = domain.store<Tag[]>([]);

export const getTagsFx = domain.effect<void, Tag[]>();
export const createTagFx = domain.effect<string, void>();
export const createTagEvent = domain.event();

export const $isOpenCreateModal = domain.store(false);
export const createModalToggle = domain.event();

export const $tagName = domain.store('');
export const setTagName = domain.event<string>();
export const resetTagName = domain.event();

export const $isDeleteVisible = domain.store(false);
export const deleteVisibleToggle = domain.event();
export const resetDeleteVisible = domain.event();
export const deleteTagFx = domain.effect<number, void>();
