import { NgModule } from "@angular/core";
import { UniMedComponent } from "./uni-med.component";
import { SharedModule } from "../shared/shaed.module";
import { UniMedRoutingModule } from "./uni-med-routing.module";
import { RouterModule } from "@angular/router";
import { UniMedListComponent } from './uni-med-list/uni-med-list.component';
import { UniMedEditComponent } from './uni-med-edit/uni-med-edit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UniMedItemComponent } from './uni-med-list/uni-med-item/uni-med-item.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        UniMedComponent,
        UniMedListComponent,
        UniMedEditComponent,
        UniMedItemComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        UniMedRoutingModule
    ]
})

export class UniMedModule{}