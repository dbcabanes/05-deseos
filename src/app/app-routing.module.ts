import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      // Hemos creado la carpeta PAGES y metido dentro los tabs, por lo tanto tenemos que cambiarle la ruta desde aqui
      import("./Pages/tabs/tabs.module").then(m => m.TabsPageModule)
  } /*,
  {
    path: "agregar",
    loadChildren: "./Pages/agregar/agregar.module#AgregarPageModule"
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
