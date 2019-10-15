import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AgregarPage } from "../agregar/agregar.page";
import { AlertController } from "@ionic/angular";
import { ok } from "assert";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(
    public DeseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async agregarlista() {
    //this.router.navigateByUrl("/tabs/tab1/agregar");
    const alert = await this.alertCtrl.create({
      header: "Nueva lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista "
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => console.log("Cancelar")
        },
        {
          text: "Crear",
          handler: data => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            this.DeseosService.crearLista(data.titulo);
          }
        }
      ]
    });
    alert.present();
  }
}
