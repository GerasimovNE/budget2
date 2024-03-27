
export type Invoice={
    id?:number,
    name:string,
    description?:string,
    cost:number,
    type:"task"|"expense"|"income",
    status?:string,
    deadline?: "monthly"|"daily"|"weekly",
	submitted?: string,
	created_at?: string,
	updated_at?: string

}

