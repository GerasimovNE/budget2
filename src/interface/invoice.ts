import { Tag } from './tag';
export type Invoice = {
    id?: number;
    name: string;
    description?: string;
    cost?: string;
    type: string;
    status?: string;
    deadline?: string;
    submitted?: string;
    created_at?: string;
    updated_at?: string;
    repeat_interval?: string;
    repeat_count?: string;
    tags: Tag[];
};

export type AttachTags = {
    invoice_id: number;
    tag_id: number[];
};

export type Params = {
    page?: number;
    search?: string;
    maxCost?: number;
    minCost?: number;
    type?: string;
    status?: string;
    orderBy?: string;
    orderDir?: string;
};

export type DateParams = {
    startDate: string;
    endDate: string;
};
