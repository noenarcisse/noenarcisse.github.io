import { Injectable, isDevMode, signal } from "@angular/core";
import { Project } from "../types/Project";


//refacto pour angular avec de la DI
@Injectable({
    providedIn: 'root'
})
export class AppData
{
    public readonly isDevMode:boolean = isDevMode();

    public projects = signal<Project[]>([]);
    public isDataLoaded = signal(false);
    //meh
    public links: GoogleSheets={
        body:"https://docs.google.com/spreadsheets/d/e/",
        files: [
            "2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=730308241&single=true&output=csv",
            "2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=1796485526&single=true&output=csv"
        ]
    };

    constructor() { }

    getFileURL(id:number) : string
    {
        if(id >= this.links.files.length)
            throw new Error("Out of bound exception on links.files");

        return this.links.body+this.links.files[id];
    }
}

// si le fichier de ref est toujours le meme sheet, les files peuvent etre juste un ID qui est la page du doc
//si y'a plusieur gooogle sheets, c'est un body + doc + id page 
// pour l'instant ca reflete pas cette realité mais ca traite meme les pages comme
// des docs séparés (ce qui est okay et consistant juste moins realiste)
//ca cree quand meme des "files" string plus longs
export interface GoogleSheets
{
    readonly body:string;
    files:string[]; 
}