import { RouterModule, Routes } from "@angular/router";
import { NominaComponent } from "./nomina.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: NominaComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NominaRoutingModule { }