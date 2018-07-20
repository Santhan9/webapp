import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  selectedValue: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Ballymena BT43 6UF'},
    {value: 'pizza-1', viewValue: 'Londonderry, BT48 7PX'},
    {value: 'tacos-2', viewValue: 'Belfast BT7 1RR'}
  ];
  
  constructor() {


   }

  ngOnInit() {

    this.selectedValue = "steak-0";
  }

}
