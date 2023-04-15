import { RouterModule, Routes } from "@angular/router";
import { PagosComponent } from "./pagos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: PagosComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagosRoutingModule { }