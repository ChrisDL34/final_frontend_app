import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppFacade } from './app.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,

})
export class AppComponent implements OnInit {
  title = 'final_frontend_app';

  constructor(private readonly facade: AppFacade) {}

  ngOnInit(): void {
    this.facade.getRefreshToken$();
  }
}
