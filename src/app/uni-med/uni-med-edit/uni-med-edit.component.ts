import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uni-med-edit',
  templateUrl: './uni-med-edit.component.html',
  styleUrls: ['./uni-med-edit.component.css']
})
export class UniMedEditComponent implements OnInit {
  unimedForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let clave = '';
    let descripcion = '';

    /** checkin if we are edditing */
    this.unimedForm = new FormGroup({
      'cv': new FormControl(clave, Validators.required),
      'desc': new FormControl(descripcion, Validators.required)
    })

  }

  onSubmit() {

  }
}
