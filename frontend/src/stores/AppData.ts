import { reactive } from "vue";
import { type ProjectCardData } from "@/types/ProjectCard";
import type { GoogleSheets } from "@/types/GoogleSheets";

/**
 * Singleton class for the App main infos
 */
export class AppData
{
    private static _instance:AppData;
    private baseUrl : string;

    public readonly isDevMode:boolean = import.meta.env.DEV;

    public projects : Project[] = [];
    public isDataLoaded : boolean = false;
    public sheets : Map<string,  GoogleSheets>;

    private constructor(urlBody:string)
    {
        this.baseUrl = urlBody;
        this.sheets = new Map<string, GoogleSheets>();
    }

    public static getInstance(body?:string):AppData
    {
        if(!this._instance)
        {
            if(!body)
                throw new Error("AppData has not been initialized yet!");

            this._instance = reactive(new AppData(body)) as AppData;
        }
        return this._instance;
    }

    public AddFile(key : string, link : string) {
        this.sheets.set(
            key, 
            {
                body: this.baseUrl,
                file : link
            }
        )
    }
}

// si le fichier de ref est toujours le meme sheet, les files peuvent etre juste un ID qui est la page du doc
//si y'a plusieur gooogle sheets, c'est un body + doc + id page 
// pour l'instant ca reflete pas cette realité mais ca traite meme les pages comme
// des docs séparés (ce qui est okay et consistant juste moins realiste)
//ca cree quand meme des "files" string plus longs

//todo
//the fuck is this
//pourquoi interface ?
//pour pas que dict avec des nom faciles ?
