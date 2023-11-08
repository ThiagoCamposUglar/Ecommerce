import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  categories: Category[] | undefined;

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  getCategories(){

  }
}
