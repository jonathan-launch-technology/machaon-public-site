export default class Sponsor {
    description: string
    logo: string
    url: string

    constructor(description: string, logo: string, url: string) {
        this.description = description;
        this.logo = logo;
        this.url = url;
    }
}