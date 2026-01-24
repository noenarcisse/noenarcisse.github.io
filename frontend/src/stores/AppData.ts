import { reactive, ref, type Ref } from "vue";
import {type Project} from "@/types/Project";

/**
 * Singleton class for the App main infos
 */
export class AppData
{
    private static _instance:AppData;

    public readonly isDevMode:boolean = import.meta.env.DEV;

    public projects:Project[] = [];
    public isDataLoaded:boolean = false;
    public links: GoogleSheets;

    private constructor(urlBody:string)
    {
        this.links={
            body: urlBody,
            files: []
        };
    }

    public static getInstance(body?:string):AppData
    {
        if(!this._instance)
        {
            if(!body)
                throw new Error("AppData has not been initialized yet!");

            this._instance = reactive(new AppData(body)) as AppData;
            //this._instance = new AppData(body);
        }
        return this._instance;
    }
}

export interface GoogleSheets
{
    readonly body:string;
    files:string[]; 
}