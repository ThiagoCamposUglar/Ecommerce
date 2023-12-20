import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.css']
})
export class DepartmentManagementComponent implements OnInit {
  departments: Department[] = [];

  constructor(private dpService: DepartmentService){

  }

  ngOnInit(): void {
    
  }

  edit(id: number){

  }

  create(){
    
  }
}
