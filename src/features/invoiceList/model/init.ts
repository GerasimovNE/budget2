import { getInvoice, createInvoice, deleteInvoice } from '@/dal/invoice';
import {
    getInvoicesFx,
    $invoices,
    $cost,
    setCost,
    $name,
    setName,
    resetCost,
    resetType,
    resetName,
    $type,
    setType,
    $isOpenCreateModal,
    openCreateModal,
    closeCreateModal,
    createInvoiceFx,
    createInvoiceEvent,
    deleteInvoiceFx,
} from './private';
import { sample, combine } from 'effector';

$invoices.on(getInvoicesFx.doneData, (_, store) => store);

getInvoicesFx.use(async () => {
    const { data } = await getInvoice();
    return data;
});

createInvoiceFx.use(async (invoice) => {
    await createInvoice(invoice);
});

deleteInvoiceFx.use(async (id) => {
    await deleteInvoice(id);
});

$name.on(setName, (_, n) => n).reset(resetName);
$type.on(setType, (_, t) => t).reset(resetType);
$cost.on(setCost, (_, c) => c).reset(resetType);

$isOpenCreateModal.on(openCreateModal, () => true).reset(closeCreateModal);

sample({
    clock: [createInvoiceFx, deleteInvoiceFx],
    target: getInvoicesFx,
});

sample({
    clock: createInvoiceEvent,
    source: combine([$cost, $name, $type]),
    filter: ([cost, name]) => cost >= 0 && name.length > 0,
    fn: ([cost, name, type]) => ({
        cost,
        name,
        type,
    }),
    target: [
        createInvoiceFx,
        closeCreateModal,
        resetCost,
        resetName,
        resetType,
    ],
});
