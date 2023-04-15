import { RouterModule, Routes } from "@angular/router";
import { UsuariosComponent } from "./usuarios.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: UsuariosComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class UsuariosRoutingModule { }