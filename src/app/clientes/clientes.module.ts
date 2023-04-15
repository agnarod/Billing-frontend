import { NgModule } from "@angular/core";
import { ClientesComponent } from "./clientes.component";
import { RouterModule } from "@angular/router";
import { ClientesRoutingModule } from "./clientes-routing.module";

@NgModule({
    declarations: [
        ClientesComponent
    ],
    imports: [
        RouterModule,
        ClientesRoutingModule
    ]
})

export class ClientesModule { }