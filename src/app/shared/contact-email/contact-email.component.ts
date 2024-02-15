import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  private modalService = inject(NgbModal);
  
	openFormModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', centered: true });
	}
}
