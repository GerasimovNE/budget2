import { createDomain } from 'effector';
import { DateParams } from '@/interface';

const d = createDomain();

export const $startDate = d.store('');
export const $endDate = d.store('');
export const $isOpenSummaryModal = d.store(false);
export const setStartDate = d.event<string>();
export const setEndDate = d.event<string>();
export const resetForm = d.event();
export const getSummaryFx = d.effect<DateParams, void>();
export const $summaryResult = d.store(0);
export const getSummaryEvent = d.event();
