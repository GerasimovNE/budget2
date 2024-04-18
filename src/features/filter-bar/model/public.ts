import { Params } from '@/interface';
import { createDomain } from 'effector';

const d = createDomain();

export const setFilterParamsEvent = d.event<Params>();
export const filtModalToggle = d.event();
export const $filterParams = d.store({});
