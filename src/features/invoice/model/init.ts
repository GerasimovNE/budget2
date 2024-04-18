import { getInvoice, deleteInvoice } from '@/dal/invoice';
import {
    getInvoicesFx,
    $invoices,
    deleteInvoiceFx,
    getInvoicesEvent,
    $page,
    setPage,
    resetPage,
    $currentPage,
    $lastPage,
} from './private';
import { $search, searchEvent } from '@/features/app/model/public';
import { createInvoiceFx } from '@/features/invoice-create-modal/modal';
import {
    setFilterParamsEvent,
    $filterParams,
} from '@/features/filter-bar/model/public';
import { invoiceIsChanged } from '@/features/invoice-change/model/public';
import { deleteTagFx } from '@/features/tags/model';

import { combine, sample } from 'effector';
import { Invoice, Params } from '@/interface';

$invoices.on(getInvoicesFx.doneData, (_, data) => data.data);

$currentPage.on(getInvoicesFx.doneData, (_, data) => data.current_page);

$lastPage.on(getInvoicesFx.doneData, (_, data) => data.last_page);

getInvoicesFx.use(async (params) => {
    const { data } = await getInvoice(params);
    data.data.map((i: Invoice) => {
        i.deadline = i.deadline ? i.deadline.split(' ')[0] : null;
    });
    return data;
});

deleteInvoiceFx.use(async (id) => {
    await deleteInvoice(id);
});

sample({
    clock: [getInvoicesEvent],
    source: combine($page, $search, $filterParams),
    fn: ([page, search, filterParams]) => {
        const t: Params = { page, ...filterParams };
        if (search) {
            t.search = search;
        }
        return t;
    },
    target: getInvoicesFx,
});

sample({
    clock: [
        createInvoiceFx,
        deleteTagFx,
        invoiceIsChanged,
        searchEvent,
        setPage,
        setFilterParamsEvent,
    ],
    target: getInvoicesEvent,
});

$page.on(setPage, (_, p) => p).reset(resetPage);
