import { AppData } from "../stores/AppData";
import Papa from 'papaparse';

export interface Project
{
    id:number;
    title:string;
    subtitle:string;
    url: string;
    summary:string;
    link:string;
    stack:string;
    page: string;
    visual:string;
    isShown:boolean;
    isShownDev:boolean;
    logo:string;
    color:string;
    backgroundImage:string;
}

export function loadProjectsData(data : AppData)
{
    const fileSheet : number = data.isDevMode ? 1 : 0;

    console.log(data.getFileURL(fileSheet));

    Papa.parse(data.getFileURL(fileSheet),
      {
        header: true,						// use a header kept in the very first line 
        download: true,
        worker: true,
        encoding: 'UTF-8',					//csv file from g sheets are in utf
        skipEmptyLines: true,				//remove the last empty line, does not remove any other one despite the actual name of the param
        complete: (results) => {
          //console.log(results.data)		// json de string a repasser
          const rawData = results.data as ProjectData[]

          data.projects
          .set(
            rawData
            .filter(isProject)
            .map((row, index: number): Project => ({

              id: index,
              title: row.title || 'Title missing',
              summary: row.summary || 'Summary is missing',
              url:row.url || '',
              subtitle: row.subtitle || 'subtitle missing',
              link: row.link || '#',
              stack: row.stack || 'Stack is missing',
              page: row.page?.replace(/\n{3,}/g, '\n\n') || 'Page content is missing',
              visual: row.visual || '',
              isShown: Boolean(Number(row.isShown)),
              isShownDev: Boolean(Number(row.isShownDev)),
              logo: row.logo || '/unitylogowhite.png',
              color: row.color || 'black',
              backgroundImage: row.imgbg || 'copypasta_screen.jpg' //change proper default img here
            }))
          );

        console.log(data.projects());
        data.isDataLoaded.set(true);

        }
      });
}

export interface ProjectData {
    title?: string;
    subtitle?:string;
    summary:string;
    url:string;
    link?: string;
    stack?: string;
    page?: string;
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
        typeof row.page === 'string'        &&
        typeof row.isShown === 'string' && (Number(row.isShown) === 0 || Number(row.isShown) === 1) &&
        typeof row.isShownDev === 'string' && (Number(row.isShownDev) === 0 || Number(row.isShownDev) === 1)

        //add new data to guard here like logo and color

    );
}