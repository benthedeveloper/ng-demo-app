import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AdalConfigService } from './adal-config.service';
import { AdalService } from 'ng2-adal/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-demo-app';
  profile: any;

  constructor(private adalService: AdalService, private adalConfigService: AdalConfigService) {
    this.adalService.init(this.adalConfigService.adalConfig);
  }

  ngOnInit(): void {
    // TEMP LOGS
    console.log('environment.azureClientId: ', environment.azureClientId);
    console.log('environment.azureTenant: ', environment.azureTenant);

    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }

}
