import { Page } from "@playwright/test";

export class connexion {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }


Elements = {
    Email:        () => this.page.getByRole('textbox', { name: 'Votre email' }),
    mot_de_passe: () => this.page.getByRole('textbox', { name: '********' }),
    se_connecter: () => this.page.getByRole('button', { name: 'Se connecter' }),
}
async setEmail(u:string){
    await this.Elements.Email().fill(u);
}
async setmdps(p:string){
    await this.Elements.mot_de_passe().fill(p);
}
async click_sc(){
    await this.Elements.se_connecter().click();
}
}