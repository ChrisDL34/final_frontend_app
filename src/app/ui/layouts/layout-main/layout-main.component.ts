import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [HeaderContainerComponent,FooterContainerComponent,RouterOutlet],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.css'
})
export class LayoutMainComponent {

}
