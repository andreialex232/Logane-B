import { Component, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../send-email-form/send-email-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.scss'],
  standalone: true,
  imports: [FormComponent, RouterLink]
})
export class ContactEmailComponent {

  constructor(private modalSvc: NgbModal){}

  handleSendEmail(event: string, currentModal: NgbActiveModal) {
    console.log('message from trimite', event);
    if(event === 'valid') {
      currentModal.close();
    }
  }
  
	openFormModal(content: TemplateRef<any>) {
    this.modalSvc.open(content, { size: 'lg', centered: true });
	}
}
