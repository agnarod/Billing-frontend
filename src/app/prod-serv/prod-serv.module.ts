import { NgModule } from "@angular/core";
import { ProdServComponent } from "./prod-serv.component";
import { RouterModule } from "@angular/router";
import { ProdServRoutingModule } from "./prod-serv-routing.module";

@NgModule({
    declarations: [
        ProdServComponent
    ],
    imports: [
        RouterModule,
        ProdServRoutingModule
    ]
})
export class ProdServModule { }