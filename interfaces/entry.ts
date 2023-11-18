export interface Entry {
    _id: string;
    title:string
    description:string;
    createdAt: number;
    status: EntryStatus;

}

export type EntryStatus = 'Backlog' | 'To do' | 'In progress' | 'Designed'