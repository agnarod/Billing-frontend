import { RouterModule, Routes } from "@angular/router";
import { IngresosComponent } from "./ingresos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: IngresosComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IngresosRoutingModule { }