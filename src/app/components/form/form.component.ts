import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  template: ''
})
export class FormComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      email: ['']
    });
  }

}
