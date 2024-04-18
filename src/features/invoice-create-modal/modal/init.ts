import { createInvoice } from '@/dal/invoice';
import {
    $cost,
    setCost,
    $name,
    setName,
    $type,
    setType,
    setDeadline,
    $deadline,
    $repeatCheckbox,
    $deadlineCheckbox,
    $isOpenCreateModal,
    createInvoiceEvent,
    $description,
    setDescription,
    $repeat,
    setRepeat,
    $status,
    setStatus,
    deadlineToggle,
    repeatToggle,
    resetForm,
} from './private';
import { createModalToggle, createInvoiceFx } from './public';
import { combine, sample } from 'effector';

$name.on(setName, (_, n) => n).reset(resetForm);
$type.on(setType, (_, t) => t).reset(resetForm);
$cost.on(setCost, (_, c) => c).reset(resetForm);

$description.on(setDescription, (_, d) => d).reset(resetForm);

$deadlineCheckbox.on(deadlineToggle, (_) => !_).reset(resetForm);

$isOpenCreateModal.on(createModalToggle, (_) => !_).reset(resetForm);
$deadline.on(setDeadline, (_, d) => d).reset(resetForm);
$repeatCheckbox.on(repeatToggle, (_) => !_).reset(resetForm);

$repeat.on(setRepeat, (_, r) => r).reset(resetForm);

$status.on(setStatus, (_, s) => s).reset(resetForm);
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
        $deadlineCheckbox,
        $repeatCheckbox,
        $repeat,
    ]),
    filter: ([cost, name]) => parseFloat(cost) >= 0 && name.length > 0,
    fn: ([
        cost,
        name,
        type,
        description,
        status,
        deadline,
        deadlineCheckbox,
        repeatCheckbox,
        repeat,
    ]) => ({
        name,
        cost: type == 'task' ? '0' : cost,
        description,
        type,
        status,
        deadline: deadlineCheckbox ? deadline : null,
        repeat_interval: repeatCheckbox ? repeat : null,
        tags: [],
    }),
    target: [createInvoiceFx, createModalToggle, resetForm],
});
