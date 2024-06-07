import { Injectable } from '@angular/core';
import { Observable,  map,  } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IrefreshToken } from './core/models/refreshToken.models';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/general/storage.service';
import { UserState } from './core/states/user.state';
import { URL_RESOURCES } from './core/resources/url.resource';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private storageService: StorageService,
    private userState: UserState,
  ) {}

  getRefreshToken$(): Observable<string> {
    var token= "";
    this.route.queryParamMap.subscribe((queryParams) => {
      token = queryParams.get('token');
      console.log('Token extraído:', token);
      if (token) {
        const refreshToken: IrefreshToken = { token: token };
        this.storageService.set('refreshToken', token);
        this.authService
          .doRefreshToken(refreshToken)
          .pipe(
            map((auths) => {
              console.log("hsdhiuajshdioauhdnoklais")
              this.storageService.set('token', auths.token);
              this.storageService.set('userId', auths.userId);
              this.storageService.set('userName', auths.userName);
              this.userState.setUserAuth(auths);
            })
          );
        }
      });
      return this.storageService.get('refreshToken');
    }
}
