import { createDomain } from 'effector';
import { Tag } from '@/interface/tag';

const domain = createDomain();

export const $tags = domain.store<Tag[]>([]);

export const getTagsFx = domain.effect<void, Tag[]>();
export const createTagFx = domain.effect<string, void>();
export const deleteTagFx = domain.effect<number, void>();
