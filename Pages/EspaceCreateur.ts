import { Page } from "@playwright/test";

export class EspaceCreateur {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    btn_espace_createur: () => this.page.getByRole('link', { name: 'Espace Créateur' }).nth(0)
}

async clickbtn(){
    await this.Elements.btn_espace_createur().click();
}
}