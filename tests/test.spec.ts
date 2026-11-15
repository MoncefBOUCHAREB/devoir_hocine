import { test, expect } from '@playwright/test';
import { EspaceCreateur } from '../Pages/EspaceCreateur';
import { connexion } from '../Pages/connexion';
import { communaute } from '../Pages/communaute';

let EC: EspaceCreateur;
let CN: connexion;
let CM: communaute;

test("espace createur ",async ({ page }) => {
    EC = new EspaceCreateur(page)
    CN = new connexion(page)
    CM = new communaute(page)
    await page.goto("https://preprod.thrundrz.fr/")
    await EC.clickbtn()
    await expect(page).toHaveURL("https://preprod.thrundrz.fr/devenir-partenaire")
    await CN.setEmail("c1@createur.fr")
    await CN.setmdps("123456789")
    await CN.click_sc()
    await expect(page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient")
    await CM.btn_communaute()
    await expect(page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient/communaute")
    await CM.btn_mes_pubs()
    await expect(page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient/communaute/publications")
    await CM.btn_nv_annonce()
    await CM.setitre("Soirée concert jazz")
    await CM.setdescription("Venez profiter d'une soirée jazz avec des musiciens locaux. Ouvert à tous, entrée libre.")
    await CM.click_pub()
    await expect(CM.Elements.msg_succes()).toBeVisible()
})
