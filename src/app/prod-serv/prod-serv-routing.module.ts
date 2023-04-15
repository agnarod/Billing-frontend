import { RouterModule, Routes } from "@angular/router";
import { ProdServComponent } from "./prod-serv.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: ProdServComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProdServRoutingModule { }