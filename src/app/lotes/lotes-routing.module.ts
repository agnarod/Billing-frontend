import { RouterModule, Routes } from "@angular/router";
import { LotesComponent } from "./lotes.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: LotesComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LotesRoutingModule { }