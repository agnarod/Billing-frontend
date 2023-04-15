import { Component } from '@angular/core';

@Component({
  selector: 'app-uni-med-list',
  templateUrl: './uni-med-list.component.html',
  styleUrls: ['./uni-med-list.component.css']
})
export class UniMedListComponent {


  rows = [
    {
      "idString":"abcd",
      "clave": "H24",
      "descripcion":"Servicio"
    },
    {
      "idString":"bcde",
      "clave": "PQT",
      "descripcion":"Paquete"
    },
    {
      "idString":"abab",
      "clave": "KG",
      "descripcion":"Kilogramo"
    },
    {
      "idString":"abcd",
      "clave": "H24",
      "descripcion":"Servicio"
    },
    {
      "idString":"bcde",
      "clave": "PQT",
      "descripcion":"Paquete"
    },
    {
      "idString":"abab",
      "clave": "KG",
      "descripcion":"Kilogramo"
    },
    {
      "idString":"abcd",
      "clave": "H24",
      "descripcion":"Servicio"
    },
    {
      "idString":"bcde",
      "clave": "PQT",
      "descripcion":"Paquete"
    },
    {
      "idString":"abab",
      "clave": "KG",
      "descripcion":"Kilogramo"
    }
  ]

  
  onDblClick(i){
    console.log("que transa, aquí ta tu unidad");
    console.log(this.rows[i]);
    
  }
}
