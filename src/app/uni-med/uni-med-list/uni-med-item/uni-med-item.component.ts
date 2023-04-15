import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uni-med-item',
  templateUrl: './uni-med-item.component.html',
  styleUrls: ['./uni-med-item.component.css']
})
export class UniMedItemComponent {
  @Input() item:{idString:string, clave:string, descripcion:string};
  
}
