import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path: "listaproductos", component: ProductosComponent
  },
  {
    path: "apiUsuarios",component: UsuariosComponent
  },
  {
    path: "Kru",component: CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
