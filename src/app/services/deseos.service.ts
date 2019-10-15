import { Injectable } from "@angular/core";
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: "root"
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    //console.log("Servicio inicializado");
    const lista1 = new Lista("Recolectar piedras");
    const lista2 = new Lista("Héroes a desaparecer");
    this.listas.push(lista1, lista2);
    console.log(this.listas);
  }
}
