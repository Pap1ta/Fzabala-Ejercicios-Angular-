import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-name-editor',
  styleUrl: './name-editor.css',
  templateUrl: './name-editor.html',
})
export class NameEditor {
  // FormControl: representa un único campo del formulario
  name = new FormControl('');

  // setValue: cambia el valor del campo desde el código
  updateName() {
    this.name.setValue('Nancy');
  }
}
