import { Page } from "@playwright/test";

export class communaute {

    readonly page: Page

    constructor(p: Page) {
        this.page = p;
    }

Elements = {
    click_communaute: () => this.page.getByRole('button', { name: 'Communauté' }).nth(0),
    click_mes_pubs:   () => this.page.getByRole('button', { name: 'Mes publications' }),
    click_nv_annonce:   () => this.page.getByRole('button', { name: 'Nouvelle annonce' }),
    titre:   () => this.page.getByRole('textbox', { name: 'Titre de votre annonce' }),
    Description:   () => this.page.getByRole('textbox', { name: 'Écrivez votre description ici…' }),
    Publier:   () => this.page.getByRole('button', { name: 'Publier' }),
    msg_succes: () => this.page.getByText('Publication créée avec succès'),

}

async btn_communaute(){
    await this.Elements.click_communaute().click();
}
async btn_mes_pubs(){
    await this.Elements.click_mes_pubs().click();
}
async btn_nv_annonce(){
    await this.Elements.click_nv_annonce().click();
}
async setitre(u:string){
    await this.Elements.titre().fill(u);
}
async setdescription(d:string){
    await this.Elements.Description().fill(d);
}
async click_pub(){
    await this.Elements.Publier().click();
}
}