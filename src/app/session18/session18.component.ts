import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { DEVICE_NAME_TOKEN, MYCOMPANY_SERVICE_TOKEN } from '../app.module';
import { MyCompanyService } from './my-company.service';

@Component({
  selector: 'app-session18',
  templateUrl: './session18.component.html',
  styleUrls: ['./session18.component.sass'],
  providers:[MyCompanyService]
})
export class Session18Component implements OnInit {

  constructor(@Optional() private myCompanyService: MyCompanyService) { }

  // constructor(@Inject(DEVICE_NAME_TOKEN) private deviceName: string) { 
  //   console.log(deviceName);
  // }

  ngOnInit(): void {

  }


}
