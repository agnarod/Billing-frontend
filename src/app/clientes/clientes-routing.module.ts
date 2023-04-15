import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./clientes.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: '', component: ClientesComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule { }
