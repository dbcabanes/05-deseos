import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "src/app/models/lista.model";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";
import { ENETRESET } from "constants";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList, { static: true }) lista: IonList;
  @Input() terminada = true;
  constructor(
    public DeseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }

    console.log(lista);
  }
  borrarLista(lista: Lista) {
    this.DeseosService.borrarLista(lista);
  }

  editarNombre(lista: Lista) {
    this.DeseosService.soltarAlerta("Editar nombre", "Modificar", 2, lista);
    this.lista.closeSlidingItems();
  }
}
