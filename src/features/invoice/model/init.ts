import { getInvoice, deleteInvoice } from '@/dal/invoice';
import {
    getInvoicesFx,
    $invoices,
    deleteInvoiceFx,
    $test,
    setTest,
} from './private';
import { createInvoiceFx } from '@/features/invoice-create-modal/modal';
import { invoiceIsChanged } from '@/features/invoice-change/model/public';
import { deleteTagFx } from '@/features/tags/model';

import { sample } from 'effector';

$invoices.on(getInvoicesFx.doneData, (_, store) => store);

getInvoicesFx.use(async () => {
    const { data } = await getInvoice();
    return data.data;
});

$test.on(setTest, (_, t) => t);
deleteInvoiceFx.use(async (id) => {
    await deleteInvoice(id);
});

sample({
    clock: [createInvoiceFx, deleteTagFx, invoiceIsChanged],
    target: getInvoicesFx,
});
