import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AdalConfigService {

  constructor() { }

  public get adalConfig(): any {
    return {
      tenant: `${environment.azureTenant}`,
      clientId: `${environment.azureClientId}`,
      redirectUri: `${window.location.origin}/`,
      postLogoutRedirectUri: `${window.location.origin}/`
    };
  }

}
