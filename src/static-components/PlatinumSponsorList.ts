import Sponsor from "@/app/data/Sponsor"
import PlatinumSponsor from "./PlatinumSponsor";

export default class PlatinumSponsorList implements StaticComponent {

    sponsors: Sponsor[]

    constructor(sponsors: Sponsor[]) {
        this.sponsors = sponsors
    }

    async render(): Promise<string> {
        let result = '';
        for (const sponsor of this.sponsors) {
            result = result + await new PlatinumSponsor(sponsor).render()
        }
        return result;
    }
}