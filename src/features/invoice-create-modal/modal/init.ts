import { createInvoice, attachTags } from '@/dal/invoice';
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
    $repeatCount,
    setRepeatCount,
    deadlineToggle,
    repeatToggle,
    createInvoiceFx,
    resetForm,
    $tags,
    setTags,
} from './private';
import { createModalToggle, invoiceCreated } from './public';
import { combine, sample } from 'effector';
import { Invoice } from '@/interface';

$name.on(setName, (_, n) => n).reset(resetForm);
$type.on(setType, (_, t) => t).reset(resetForm);
$cost.on(setCost, (_, c) => c).reset(resetForm);

$description.on(setDescription, (_, d) => d).reset(resetForm);

$deadlineCheckbox.on(deadlineToggle, (_) => !_).reset(resetForm);

$isOpenCreateModal.on(createModalToggle, (_) => !_);
$deadline.on(setDeadline, (_, d) => d).reset(resetForm);
$repeatCheckbox.on(repeatToggle, (_) => !_).reset(resetForm);

$repeat.on(setRepeat, (_, r) => r).reset(resetForm);

$repeatCount.on(setRepeatCount, (_, c) => c).reset(resetForm);

$tags.on(setTags, (_, t) => t).reset(resetForm);
createInvoiceFx.use(async (invoice) => {
    const { data } = await createInvoice(invoice);
    await attachTags({
        invoice_id: data,
        tag_id: invoice.tags.map((t) => t.id),
    });
});

sample({
    clock: createInvoiceEvent,
    source: combine([
        $cost,
        $name,
        $type,
        $description,
        $deadline,
        $repeat,
        $repeatCount,
        $tags,
    ]),
    fn: ([
        cost,
        name,
        type,
        description,
        deadline,
        repeat,
        repeatCount,
        tags,
    ]) => {
        let invoice: Invoice = {
            name,
            cost,
            description,
            type,
            deadline: $deadlineCheckbox.getState() ? deadline : '',
            tags,
        };
        if ($repeatCheckbox.getState()) {
            invoice.repeat_interval = repeat;
            invoice.repeat_count = repeatCount;
        }
        return invoice;
    },
    target: createInvoiceFx,
});

sample({
    clock: createInvoiceFx.doneData,
    target: [invoiceCreated, createModalToggle],
});
sample({ clock: createModalToggle, target: resetForm });
