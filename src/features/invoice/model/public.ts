import { createDomain } from 'effector';
import { Params } from '@/interface';

const d = createDomain();
export const setParams = d.createEvent<Params>();
