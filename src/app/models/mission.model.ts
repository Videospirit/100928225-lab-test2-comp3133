export class Mission {
    private mission_name: string;
    private launch_year: string;
    private details: string;
    private mission_patch_small: string;
    private year: string;
    private rocketName: string;
    private rocketType: string;
    private siteName: string;
    private articleLink: string;
    private wikiLink: string;
    private video: string;



    constructor(mission_name: string, launch_year: string, details: string, mission_patch_small: string, year: string, rocketName: string, rocketType: string,
        siteName: string, articleLink: string, wikiLink: string, video: string){
        this.mission_name = mission_name;
        this.launch_year =launch_year;
        this.details =details;
        this.mission_patch_small =mission_patch_small;
        this.year = year;
        this.rocketName =rocketName;
        this.rocketType=rocketType;
        this.siteName=siteName;
        this.articleLink=articleLink;
        this.wikiLink=wikiLink;
        this.video=video;
    }
    
}
