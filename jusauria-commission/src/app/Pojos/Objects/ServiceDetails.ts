export class ServiceDetails {
    title:string;
    description:string;
    mainPage:string;
    iconLink: string;

    constructor(title:string,description:string,mainPage:string,iconLink: string){
        this.title=title;
        this.description=description;
        this.mainPage=mainPage;
        this.iconLink=iconLink;
    }
}
