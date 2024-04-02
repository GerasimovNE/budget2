import { createInvoice } from '@/dal/invoice';
import {
    $cost,
    setCost,
    $name,
    setName,
    resetCost,
    resetType,
    resetName,
    $type,
    setType,
    setDeadlineCheckbox,
    resetDeadline,
    resetRepeatCheckbox,
    setRepeatCheckbox,
    setDeadline,
    $deadline,
    $repeatCheckbox,
    $deadlineChekbox,
    resetDeadlineCheckbox,
    $isOpenCreateModal,
    createInvoiceEvent,
    $description,
    setDescription,
    resetDescription,
    $repeat,
    setRepeat,
    resetRepeat,
    $status,
    setStatus,
    resetStatus,
} from './private';
import { createModalToggle, createInvoiceFx } from './public';
import { combine, sample } from 'effector';

$name.on(setName, (_, n) => n).reset(resetName);
$type.on(setType, (_, t) => t).reset(resetType);
$cost.on(setCost, (_, c) => c).reset(resetCost);

$description.on(setDescription, (_, d) => d).reset(resetDescription);

$deadlineChekbox
    .on(setDeadlineCheckbox, (_, b) => b)
    .reset(resetDeadlineCheckbox);

$isOpenCreateModal.on(createModalToggle, (_) => !_);
$deadline.on(setDeadline, (_, d) => d).reset(resetDeadline);
$repeatCheckbox.on(setRepeatCheckbox, (_, b) => b).reset(resetRepeatCheckbox);

$repeat.on(setRepeat, (_, r) => r).reset(resetRepeat);

$status.on(setStatus, (_, s) => s).reset(resetStatus);
createInvoiceFx.use(async (invoice) => {
    await createInvoice(invoice);
});

sample({
    clock: createInvoiceEvent,
    source: combine([
        $cost,
        $name,
        $type,
        $description,
        $status,
        $deadline,
        $repeat,
    ]),
    filter: ([cost, name]) => parseFloat(cost) >= 0 && name.length > 0,
    fn: ([cost, name, type, description, status, deadline, repeat]) => ({
        name,
        cost: type == 'task' ? '0' : cost,
        description,
        type,
        status,
        deadline: $deadlineChekbox ? deadline : null,
        repeat_interval: $repeatCheckbox ? repeat : null,
        tags: [],
    }),
    target: [
        createInvoiceFx,
        createModalToggle,
        resetCost,
        resetName,
        resetType,
        resetDescription,
        resetDeadlineCheckbox,
        resetRepeatCheckbox,
        resetDeadline,
        resetRepeat,
        resetStatus,
    ],
});
