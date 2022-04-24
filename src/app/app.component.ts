import { Component, OnInit } from '@angular/core';
import { DropDownMenuData } from './interfaces/drop-down-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectData_1: DropDownMenuData[] = [
    { name: 'selectData_1', id: 1 },
    { name: 'selectData_2', id: 2 },
    { name: 'selectData_3', id: 3 },
    { name: 'selectData_4', id: 4 }
  ];
  public selectData_2: DropDownMenuData[] = [
    { name: 'selectData_1', id: 1 },
    { name: 'selectData_2', id: 2 },
  ];
  public selectData_3: DropDownMenuData[] = [
    { name: 'selectData_1', id: 1 }
  ];
  public selectData_4: DropDownMenuData[] = [
    { name: 'selectData_1', id: 1 },
    { name: 'selectData_2', id: 2 },
    { name: 'selectData_3', id: 3 },
  ];

  ngOnInit(): void { }
}
