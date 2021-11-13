import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { MyCompanyService } from '../my-company.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.sass']
})
export class User1Component implements OnInit {

  constructor(@SkipSelf() private myCompanyService: MyCompanyService) { }

  ngOnInit(): void {
  }

}
