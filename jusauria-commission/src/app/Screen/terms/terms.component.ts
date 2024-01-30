import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { FooterComponent } from '../../ReuseComponents/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../../ReuseComponents/dropdown/dropdown.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule,DropdownComponent, NavbarComponent, FooterComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
 
}
