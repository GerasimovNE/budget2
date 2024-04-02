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
    tags?: Tag[];
};
