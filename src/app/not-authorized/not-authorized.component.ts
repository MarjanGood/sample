import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.sass']
})
export class NotAuthorizedComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
   
   console.log(this.route.snapshot.queryParams['returnUrl']);

   const e = '/session26'
   this.router.navigate([e]);


   //after logging
  //  setTimeout(() => {
   
  //   this.router.navigate([this.route.snapshot.queryParams['returnUrl']]);
  //   },3000);
   

  }

}
