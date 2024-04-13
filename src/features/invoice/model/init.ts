import { getInvoice, deleteInvoice } from '@/dal/invoice';
import {
    getInvoicesFx,
    $invoices,
    deleteInvoiceFx,
    getInvoicesEvent,
    $params,
    $page,
    setPage,
    resetPage,
    $currentPage,
    $lastPage,
} from './private';
import { setParams } from './public';
import { createInvoiceFx } from '@/features/invoice-create-modal/modal';
import { invoiceIsChanged } from '@/features/invoice-change/model/public';
import { deleteTagFx } from '@/features/tags/model';

import { sample } from 'effector';

$invoices.on(getInvoicesFx.doneData, (_, data) => data.data);

$currentPage.on(getInvoicesFx.doneData, (_, data) => data.current_page);

$lastPage.on(getInvoicesFx.doneData, (_, data) => data.last_page);

getInvoicesFx.use(async (params) => {
    const { data } = await getInvoice(params);
    return data;
});

deleteInvoiceFx.use(async (id) => {
    await deleteInvoice(id);
});

sample({
    clock: getInvoicesEvent,
    source: $params,
    fn: (params) => {
        return params;
    },
    target: getInvoicesFx,
});

sample({
    clock: [createInvoiceFx, deleteTagFx, invoiceIsChanged, setParams],
    target: getInvoicesEvent,
});

$page.on(setPage, (_, p) => p).reset(resetPage);

$params.on(setParams, (_, p) => p);

sample({
    clock: [setPage],
    source: $page,
    fn: (page) => ({ page: page }),
    target: setParams,
});
