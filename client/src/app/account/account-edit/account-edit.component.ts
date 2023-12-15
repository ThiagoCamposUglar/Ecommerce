import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { CustomerService } from 'src/app/services/customer.service';
import { DateUtilService } from 'src/app/services/date-util.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  accountEditForm: FormGroup = new FormGroup({});
  validationErrors: string[] | undefined;
  maxDate: Date = new Date();
  user: User | null = null;
  customer: Customer | undefined;

  constructor(private accountService: AccountService, private customerService: CustomerService, private toastr: ToastrService, private fb: FormBuilder, private router: Router, private dateUtil: DateUtilService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    })
  }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.loadCustomer()
  }

  initializeForm(){
    this.accountEditForm = this.fb.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: [null, Validators.required]
    })
  }

  loadCustomer(){
    if(!this.user) return;
    this.customerService.getCustomer(this.user.id).subscribe({
      next: customer => {
        this.customer = customer;
        this.accountEditForm.patchValue(this.customer);
        console.log(this.accountEditForm.value)
      } 
    })
  }

  update(){
    this.customerService.updateCustomer(this.accountEditForm.value).subscribe({
      next: _ => {
        this.toastr.success('Cadastro atualizado com sucesso!');
        this.accountEditForm.reset(this.accountEditForm.value);
      }
    })
  }
}
