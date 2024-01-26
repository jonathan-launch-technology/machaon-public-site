import Sponsor from "@/app/data/Sponsor"

export default class PlatinumSponsor implements StaticComponent {

    sponsor: Sponsor

    constructor(sponsor: Sponsor) {
        this.sponsor = sponsor
    }

    async render(): Promise<string> {
        return `
            <div class="col-md-12 service-box service-center">
                <div class="service-icon">
                    <a href="${this.sponsor.url}" target="new"><img src="${this.sponsor.logo}" alt="" width="150" height="100"></a>
                </div>
                <div class="service-content" align="center">
                    <p><A href="${this.sponsor.url}" target="_new"><strong>${this.sponsor.url}</strong></A></p>
                    <div class="service-content" align="left">
                        <p>${this.sponsor.description}</p>
                    </div>
                </div>
            </div>`
    }
    
}