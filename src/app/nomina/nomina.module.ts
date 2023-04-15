import { NgModule } from "@angular/core";
import { NominaComponent } from "./nomina.component";
import { RouterModule } from "@angular/router";
import { NominaRoutingModule } from "./nomina-routing.module";

@NgModule({
    declarations: [
        NominaComponent
    ],
    imports: [
        RouterModule,
        NominaRoutingModule
    ]
})
export class NominaModule { }