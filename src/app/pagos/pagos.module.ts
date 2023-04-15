import { NgModule } from "@angular/core";
import { PagosComponent } from "./pagos.component";
import { RouterModule } from "@angular/router";
import { PagosRoutingModule } from "./pagos-routing.module";

@NgModule({
    declarations: [
        PagosComponent
    ],
    imports: [
        RouterModule,
        PagosRoutingModule
    ]
})
export class PagosModule { }