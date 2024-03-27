import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-email-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class SendEmailFormComponent {

  @Output() sendEmail: EventEmitter<string> = new EventEmitter();

  public form: FormGroup;
  public attemptSubmit = false;

  constructor(private fb: FormBuilder, private elRef: ElementRef){
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/[a-z]/gi)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      personalCar: new FormControl('', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]),
      tel: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
    })
  }

  get name() {
    return this.form.get('name') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get tel() {
    return this.form.get('tel') as FormControl;
  }

  get personalCar() {
    return this.form.get('personalCar') as FormControl;
  } 

  submitForm(){
    this.attemptSubmit = true;
    
    if(this.form.valid) {
      this.sendEmail.emit('valid');
    } else {
      this.sendEmail.emit('invalid');
    }
  }
};