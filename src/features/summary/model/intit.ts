import { combine, sample } from 'effector';
import {
    $startDate,
    $endDate,
    setEndDate,
    setStartDate,
    $isOpenSummaryModal,
    getSummaryFx,
    resetForm,
    getSummaryEvent,
    $summaryResult,
} from './private';
import { summaryModalToggle } from './public';
import { summaryInvoice } from '@/dal/invoice';

$startDate.on(setStartDate, (_, d) => d).reset(resetForm);
$endDate.on(setEndDate, (_, d) => d).reset(resetForm);
$isOpenSummaryModal.on(summaryModalToggle, (_) => !_);
$summaryResult.on(getSummaryFx.doneData, (_, s) => s);

getSummaryFx.use(async (params) => {
    const { data } = await summaryInvoice(params);
    return data;
});

sample({
    clock: getSummaryEvent,
    source: combine($startDate, $endDate),
    fn: ([startDate, endDate]) => ({ startDate, endDate }),
    target: getSummaryFx,
});
