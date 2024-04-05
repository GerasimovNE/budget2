import { createDomain } from 'effector';

const domain = createDomain();

export const deleteTagFx = domain.effect<number, void>();
