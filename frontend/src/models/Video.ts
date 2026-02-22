
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
    //TODO
    static readonly allowedExtensions : {} = {
        img : 
        [
            ".jpg",
            ".jpg",
            ".png"
        ],
        video : 
        [
            ".mp4"
        ]
    };

    //TODO
    private static readonly _allowedExtentionsRegex : RegExp = /(\.(png|jpe?g|mp4))$/i;
    
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
            const ext = Media.getExtension(url);
            if(!ext)
                throw new Error("Could not extract the url from the url");

            this.media = this.media = {   url : url,
                        extension: ext,
                        alt : alt ?? "" 
            };
        }
        else
        {
            throw new Error("Media error : The url is not recognized");
        }
    }

    /**
     * Extract the extension from the URL if if fits the Media allowed extensions
     * @param url 
     * @returns The extension if allowed, undefined otherwise
     */
    static getExtension(url:string) : Extension | undefined
    {
        const reg : RegExp = /(\.(png|jpe?g|mp4))$/i;
        const match = url.match(reg);

        if(!match)
            return;

        return match[0].toLowerCase() as Extension;
    }

}

//TODO passer ca en static dans la classe, recup les regex de la source de verité de la class
//Guards & utilities

export function isVideo(fileName: string): boolean {
    const reg: RegExp = /\.mp4$/gi
    return reg.test(fileName);
}

export function isImage(fileName: string): boolean {
    const reg: RegExp = /(\.(png|jpe?g|webp|avif))$/gi
    return reg.test(fileName);
}

