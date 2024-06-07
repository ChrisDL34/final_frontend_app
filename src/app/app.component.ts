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
  public token$: Observable<string>;
  public token: string;

  constructor(private readonly facade: AppFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }


  private initializeSubscriptions(): void {
    this.token$ = this.facade.getRefreshToken$();
    this.token$.subscribe((token) => {
      this.token = token;
      console.log('Token:', this.token); // Mostrar el token en la consola
    });
  }
}
