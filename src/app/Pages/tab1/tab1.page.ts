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

  agregarlista() {
    this.DeseosService.soltarAlerta("Nueva lista", "Crear", 1);
  }
}
