import { NgModule } from "@angular/core";
import { EgresosComponent } from "./egresos.component";
import { RouterModule } from "@angular/router";
import { EgresosRoutingModule } from "./egresos-routing.module";

@NgModule({
    declarations: [
        EgresosComponent
    ],
    imports: [
        RouterModule,
        EgresosRoutingModule
    ]
})
export class EgresosModule { }