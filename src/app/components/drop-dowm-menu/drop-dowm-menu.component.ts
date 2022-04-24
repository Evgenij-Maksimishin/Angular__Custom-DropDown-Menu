import { Component, OnInit, Input } from '@angular/core';
import { DropDownMenuData } from 'src/app/interfaces/drop-down-menu';

@Component({
  selector: 'app-drop-dowm-menu',
  templateUrl: './drop-dowm-menu.component.html',
  styleUrls: ['./drop-dowm-menu.component.scss']
})
export class DropDowmMenuComponent implements OnInit {
  @Input() options: DropDownMenuData[] = []
  @Input() selectedOption!: DropDownMenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
