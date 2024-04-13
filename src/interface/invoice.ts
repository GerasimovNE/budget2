import { Tag } from './tag';
export type Invoice = {
    id?: number;
    name: string;
    description?: string;
    cost: string;
    type: string;
    status: string;
    deadline: string | null;
    submitted?: string;
    created_at?: string;
    updated_at?: string;
    repeat_interval?: string | null;
    tags: Tag[];
};

export type AttachTags = {
    invoice_id: number;
    tag_id: number[];
};

export type Params = {
    page: number;
};
