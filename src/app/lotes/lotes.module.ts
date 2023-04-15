import { NgModule } from "@angular/core";
import { LotesComponent } from "./lotes.component";
import { RouterModule } from "@angular/router";
import { LotesRoutingModule } from "./lotes-routing.module";

@NgModule({
    declarations: [
        LotesComponent
    ],
    imports: [
        RouterModule,
        LotesRoutingModule
    ]
})
export class LotesModule { }