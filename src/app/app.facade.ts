import { Injectable } from '@angular/core';
import { Observable,  map,  } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IrefreshToken } from './core/models/refreshToken.models';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/general/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  getRefreshToken$(): Observable<string> {
    this.route.queryParamMap.subscribe((queryParams) => {
      const token = queryParams.get('token');
      console.log('Token extraído:', token);
      if (token) {
        console.log('token extraído de la consulta:', token);
        const refreshToken: IrefreshToken = { token: token };
        this.storageService.set('refreshToken', token);
        this.authService
          .doRefreshToken(refreshToken)
          .pipe(
            map((auths) => {
              this.storageService.set('token', auths.token);
              this.storageService.set('userId', auths.userId);
              this.storageService.set('userName', auths.userName);
            })
          )
          .subscribe();
      }
    });
    return this.storageService.get('refreshToken');
  }
}
