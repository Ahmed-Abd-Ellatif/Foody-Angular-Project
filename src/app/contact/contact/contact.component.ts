import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleOfComComponent } from 'src/app/components/title-of-com/title-of-com.component';
import { ContactFormComponent } from 'src/app/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TitleOfComComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {}
