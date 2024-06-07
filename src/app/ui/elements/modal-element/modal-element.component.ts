import { CommonModule, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-element',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './modal-element.component.html',
  styleUrl: './modal-element.component.css'
})
export class ModalElementComponent {
  @Input() title:string;
  @Input() message:string;
  @Input() closeButtonMessage:string;
  @Input() confirmButtonMessage:string | undefined;
  @Input() continue:(any)=>void | undefined;
  @Input() show: boolean = false;
  @Input() continueParams: any;
  @Input() close:()=>void;

}
