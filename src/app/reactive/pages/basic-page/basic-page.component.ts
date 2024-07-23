import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  // criando um formGroup : nescessita no seu modulo o reactive formModule
  // public myForm: FormGroup = new FormGroup({
  //  name: new FormControl(''),
  //  price: new FormControl(''),
  //  inStorage: new FormControl('')
  // });

  // mais organizado
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset();
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }
    console.log(this.myForm.value);

    // restaurando o form a seu estado original
    this.myForm.reset();
  }

  isValidField(field: string): boolean | null {
    let hasErros = this.myForm.controls[field].errors;
    let touched = this.myForm.controls[field].touched;

    return hasErros && touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }

}
