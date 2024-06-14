import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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
  public validationMessage: string | undefined;

  constructor(private fb: FormBuilder, private elRef: ElementRef){
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/[a-z]/gi)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      personalCar: new FormControl('', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]),
      tel: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      message: new FormControl('')
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

  get message() {
    return this.form.get('message') as FormControl;
  }

  createFormTemplate(): {} {
    const emailTemplate = {
      to_name: 'Catalin',
      from_name: this.name.value,
      from_telefon: this.tel.value,
      from_email: this.email.value,
      from_car: this.personalCar.value,
      message: this.message.value
    };
    return emailTemplate;
  };

  resetValidationMessageText():void {
    setTimeout(() => {
      this.validationMessage = '';
    }, 2000);
  }
  changeValidationMessage(status: string): void {
    if(status === 'valid') {
      this.validationMessage = 'Email trimis';
    } else {
      this.validationMessage = 'Nu s-a putut trimite email. Incercati mai tarziu'
    };
    this.resetValidationMessageText();
  };


  async send() {
    this.attemptSubmit = true;
    if(this.form.valid) {
      try {
        await emailjs.send(
          'service_1j1tzgq',
          'template_h3szp34',
          this.createFormTemplate(), {
            publicKey: 'S4MDncS1his2ZL4k4',
          },
        );
        this.changeValidationMessage('valid');
        this.sendEmail.emit('valid');
      } catch (err) {
        if(err instanceof EmailJSResponseStatus) {
          console.error('Failed to send email', err);
          this.changeValidationMessage('invalid');
        };
      };
    };
  };


  
}