import { NgModule } from "@angular/core";
import { UsuariosComponent } from "./usuarios.component";
import { RouterModule } from "@angular/router";
import { UsuariosRoutingModule } from "./usuarios-routing.module";

@NgModule({
    declarations: [
        UsuariosComponent
    ],
    imports: [
        RouterModule,
        UsuariosRoutingModule
    ]
})

export class UsuariosModule { }