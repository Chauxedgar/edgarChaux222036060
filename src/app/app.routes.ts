import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodosComponent } from './components/consultar-todos/consultar-todos.component';
import { ConsultarIdComponent } from './components/consultar-id/consultar-id.component';
import { CrearComponent } from './components/crear/crear.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ConsultarFiltroComponent } from './components/consultar-filtro/consultar-filtro.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    { path: '', component: MenuComponent }, // Página de inicio
    { path: 'consultar-todos', component: ConsultarTodosComponent },
    { path: 'consultar-por-id', component: ConsultarIdComponent },
    { path: 'crear', component: CrearComponent },
    { path: 'actualizar', component: ActualizarComponent },
    { path: 'eliminar', component: EliminarComponent },
    { path: 'consultar-por-filtro', component: ConsultarFiltroComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
