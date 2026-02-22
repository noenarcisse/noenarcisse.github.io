
//WIP
//regrouper les extensions dans une seule source de verité

type MediaBase = 
{
    url:string;
    //for later
    width?:number;
    height?:number;
};

type Image = MediaBase &
{
    extension: ImageExtension;
    alt:string;
};

type Video = MediaBase &
{
    extension : VideoExtension;
};

type MediaTypes = Image | Video;
type ImageExtension = ".jpg" | ".jpeg" | ".png";
type VideoExtension = ".mp4";
type Extension = ImageExtension | VideoExtension;

export class Media
{
    media : MediaTypes;
    
    constructor(url:string, alt?:string)
    { 
        if(isVideo(url))
        {
            this.media = {   url : url,
                        extension: ".mp4"
            };
        }
        else if(isImage(url))
        {

            const ext = getExtension(url);
            if(!ext)
                throw new Error("Impossible");

            

            this.media = this.media = {   url : url,
                        extension: ext,
                        alt : alt ?? "" 
            };
        }
        else
        {
            throw new Error("Impossible");
        }
    }


}


//Guards & utilities

export function isVideo(fileName: string): boolean {
    const reg: RegExp = /\.mp4$/gi
    return reg.test(fileName);
}

export function isImage(fileName: string): boolean {
    const reg: RegExp = /(\.(png|jpe?g|webp|avif))$/gi
    return reg.test(fileName);
}

function getExtension(url:string) : Extension | undefined
{
    const reg : RegExp = /(\.(png|jpe?g|mp4))$/i;
    const match = url.match(reg);

    if(!match)
        return;

    return match[0].toLowerCase() as Extension;
}