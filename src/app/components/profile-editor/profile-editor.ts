import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-profile-editor',
  styleUrl: './profile-editor.css',
  templateUrl: './profile-editor.html',
})
export class ProfileEditor {
  // FormBuilder: servicio que simplifica la creación de FormGroup y FormControl
  private formBuilder = inject(FormBuilder);

  // FormGroup con validaciones, un grupo anidado (address) y un FormArray (aliases)
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  // Getter para acceder a los campos del FormArray
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  // patchValue: modifica solo algunas propiedades del formulario
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  // ngSubmit: captura el valor actual del formulario
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
