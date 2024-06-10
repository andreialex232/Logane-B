import { Component, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SendEmailFormComponent } from '../send-email-form/send-email-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.scss'],
  standalone: true,
  imports: [SendEmailFormComponent, RouterLink]
})
export class ContactEmailComponent {

  constructor(private modalSvc: NgbModal){}

  handleSendEmail(event: string, currentModal: NgbActiveModal) {
    if(event === 'valid') {
      setTimeout(() => {
        currentModal.close();
      }, 800);
    };
  };
  
	openFormModal(content: TemplateRef<any>) {
    this.modalSvc.open(content, { size: 'lg', centered: true });
	}
}
