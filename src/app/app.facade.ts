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
        const refreshToken: IrefreshToken = { token: URL_RESOURCES.adminRefreshToken };
        this.storageService.set('refreshToken', URL_RESOURCES.adminRefreshToken);
        return this.authService
          .doRefreshToken(refreshToken)
          .pipe(
            map((auths) => {
              this.storageService.set('token', auths.token);
              this.storageService.set('userId', auths.userId);
              this.storageService.set('userName', auths.userName);
              this.userState.setUserAuth(auths);
              return auths.token
            })
          );
      }
}
