

export interface Project
{
    id:number;
    title:string;
    subtitle:string;
    link:string;
    stack:string;
    description: Description;
    visual:string;
    isShown:boolean;
    isShownDev:boolean;
    logo:string;
    color:string;
    backgroundImage:string;
}


export interface Description
{
    objective:string;
    challenge:string;
    solution:string;
}

export interface ProjectData {
    title?: string;
    subtitle?:string;
    link?: string;
    stack?: string;
    objective?: string;
    challenge?: string;
    solution?: string;
    visual?:string;
    isShown:boolean;
    isShownDev:boolean;
    logo?:string;
    color?:string;
    imgbg?:string;
}

/**
 * Typeguard simplifié pour vérifier les CSV en entrée
 * @param row - lines parsed from a CSV with papaparse
 */
export function isProject(row:any): row is ProjectData
{
    return (
        row !== null &&
        typeof row === 'object'             &&
        typeof row.title === 'string'       &&
        typeof row.link === 'string'        &&
        typeof row.stack === 'string'       &&
        typeof row.objective === 'string'   &&
        typeof row.challenge === 'string'   &&
        typeof row.solution === 'string'    &&
        typeof row.isShown === 'string' && (Number(row.isShown) === 0 || Number(row.isShown) === 1) &&
        typeof row.isShownDev === 'string' && (Number(row.isShownDev) === 0 || Number(row.isShownDev) === 1)

        //add new data to guard here like logo and color

    );
}