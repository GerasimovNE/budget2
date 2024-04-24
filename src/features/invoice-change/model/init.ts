import { sample } from 'effector';
import { attachTags, deleteInvoice, putchInvoice } from '@/dal/invoice';
import {
    $invoice,
    resetInvoise,
    $isOpenModalChange,
    setName,
    setCost,
    setDescription,
    setType,
    $deadlineCheckbox,
    deadlineToggle,
    setDeadline,
    setRepeat,
    setTags,
    attachTagsFx,
    putchInvoiceFx,
    setStatus,
    deleteInvoiceFx,
    deleteInvoiceEvent,
    changeInvoiceEvent,
    attachTagsEvent,
} from './private';
import { setInvoice, invoiceIsChanged, changeModalToggle } from './public';

$invoice
    .on(setInvoice, (_, i) => i)
    .reset(resetInvoise)
    .on(setName, (_, name) => {
        const t = { ..._ };
        t.name = name;
        return t;
    })
    .on(setCost, (_, cost) => {
        const t = { ..._ };
        console.log(cost);
        t.cost = cost;
        return t;
    })
    .on(setDescription, (_, des) => {
        const t = { ..._ };
        t.description = des;
        return t;
    })
    .on(setType, (_, type) => {
        const t = { ..._ };
        t.type = type;
        return t;
    })
    .on(setDeadline, (_, d) => {
        const t = { ..._ };
        t.deadline = d;
        return t;
    })
    .on(setRepeat, (_, r) => {
        const t = { ..._ };
        t.repeat_interval = r;
        return t;
    })
    .on(setStatus, (_, s) => {
        const t = { ..._ };
        t.status = s;
        return t;
    })
    .on(setTags, (_, tags) => {
        const t = { ..._ };
        t.tags = tags;
        return t;
    });
$deadlineCheckbox.on(deadlineToggle, (_) => !_);

$isOpenModalChange.on(changeModalToggle, (_) => !_);

deleteInvoiceFx.use(async (id) => {
    await deleteInvoice(id);
});

attachTagsFx.use(async (payload) => {
    await attachTags(payload);
});

putchInvoiceFx.use(async (invoice) => {
    await putchInvoice(invoice);
});

sample({ clock: changeInvoiceEvent, source: $invoice, target: putchInvoiceFx });

sample({ clock: putchInvoiceFx, target: attachTagsEvent });
sample({
    clock: attachTagsEvent,
    source: $invoice,
    fn: (invoice) => ({
        invoice_id: invoice.id ? invoice.id : -1,
        tag_id: invoice.tags ? invoice.tags.map((t) => t.id) : [],
    }),
    target: attachTagsFx,
});

sample({
    clock: deleteInvoiceEvent,
    source: $invoice,
    fn: (invoice) => (invoice.id ? invoice.id : -1),
    target: deleteInvoiceFx,
});

sample({
    clock: [attachTagsFx, deleteInvoiceFx],
    target: [invoiceIsChanged, changeModalToggle],
});
