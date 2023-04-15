import { RouterModule, Routes } from "@angular/router";
import { EgresosComponent } from "./egresos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: EgresosComponent, children: []
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EgresosRoutingModule { }