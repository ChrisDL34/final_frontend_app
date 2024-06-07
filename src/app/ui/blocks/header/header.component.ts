import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageService } from '../../../core/services/general/storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  username: string = '';
   constructor(private readonly storageService: StorageService) {}



  ngOnInit(): void {


    this.username = this.storageService.get('userName');
  }

  @Output() logout = new EventEmitter<void>();
  onLogout() {

    this.logout.emit();
    console.log('Logout');
  }
}
