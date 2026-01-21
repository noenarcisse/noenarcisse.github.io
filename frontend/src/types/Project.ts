

export interface Project
{
    id:number;
    title:string;
    link:string;
    stack:string;
    description: Description;
    visual:string;
    isShown:boolean;
    isShownDev:boolean;
}


export interface Description
{
    objective:string;
    challenge:string;
    solution:string;
}

export interface RawProjectCSV {
    title?: string;
    link?: string;
    stack?: string;
    objective?: string;
    challenge?: string;
    solution?: string;
    visual?:string;
    isShown:boolean;
    isShownDev:boolean;
}