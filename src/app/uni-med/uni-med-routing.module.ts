import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UniMedComponent } from "./uni-med.component";

const routes: Routes = [
    {
        path: '', component: UniMedComponent, children: [

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniMedRoutingModule { }