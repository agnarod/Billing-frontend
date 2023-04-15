import { NgModule } from "@angular/core";
import { TrasladosComponent } from "./traslados.component";
import { RouterModule } from "@angular/router";
import { TrasladosRoutingModule } from "./traslados-routing.module";

@NgModule({
    declarations:[
        TrasladosComponent
    ],
    imports:[
        RouterModule,
        TrasladosRoutingModule
    ]
})
export class TrasladosModule{}