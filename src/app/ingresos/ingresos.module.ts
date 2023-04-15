import { NgModule } from "@angular/core";
import { IngresosComponent } from "./ingresos.component";
import { RouterModule } from "@angular/router";
import { IngresosRoutingModule } from "./ingresos-routing";

@NgModule({
    declarations: [
        IngresosComponent
    ],
    imports: [
        RouterModule,
        IngresosRoutingModule
    ]
})

export class IngresosModule { }