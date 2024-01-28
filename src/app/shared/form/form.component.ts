import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class FormComponent {

  public form: FormGroup;
  public attemptSubmit = false;

  constructor(private fb: FormBuilder, private elRef: ElementRef){
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/[a-z]/gi)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
    })
  }

  submitFrom(){
    this.attemptSubmit = true;

    if(this.form.valid){
      console.log('valid')
    } else {
      console.log('invalid')
    }
  }
}