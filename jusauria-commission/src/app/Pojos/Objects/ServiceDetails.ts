export class ServiceDetails {
    title:string;
    description:string;
    mainPage:string;
    iconLink: string;
    status: boolean;

    constructor(title:string,description:string,mainPage:string,iconLink: string,status:boolean){
        this.title=title;
        this.description=description;
        this.mainPage=mainPage;
        this.iconLink=iconLink;
        this.status = status
    }
}
