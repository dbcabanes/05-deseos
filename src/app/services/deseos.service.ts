import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class DeseosService {
  listas: Lista[] = [];

  constructor(private alertCtrl: AlertController, private router: Router) {
    //console.log("Servicio inicializado");
    this.cargarStorage();
    //const lista1 = new Lista("Recolectar piedras");
    //const lista2 = new Lista("Héroes a desaparecer");
    //this.listas.push(lista1, lista2);
    console.log(this.listas);
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }
  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => {
      return listaData.id !== lista.id;
    });
    this.guardarStorage();
  }
  cargarLista(id: string | number) {
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }
  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }
  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }
  async soltarAlerta(
    header: string,
    text: string,
    func: number,
    lista?: Lista
  ) {
    const alert = await this.alertCtrl.create({
      header: `${header}`,
      inputs: [
        {
          name: "titulo",
          type: "text",
          //value: lista.titulo,
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
          }
        },
        {
          text: `${text}`,
          handler: data => {
            console.log(data);
            switch (func) {
              case 1: {
                if (data.titulo.length === 0) {
                  return;
                }
                const listaId = this.crearLista(data.titulo);
                this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
                break;
              }
              case 2: {
                if (data.titulo.length === 0) {
                  return;
                }
                lista.titulo = data.titulo;
                this.guardarStorage();

                break;
              }
            }
          }
        }
      ]
    });
    alert.present();
  }
}
