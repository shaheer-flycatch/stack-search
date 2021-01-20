import { Component, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';
import { List } from 'src/app/_models/list';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  listItems;
  constructor(
    public listPageService: ListServiceService
  ) { }

  ngOnInit(): void {
    this.getListItems();
    console.log('listdata', this.listItems);
  }
  getListItems() {
    this.listPageService
      .getAllList()
      .subscribe((allList: List) => {
        this.listItems = allList.items.map((data, index) => {
          return data;
        });
        localStorage.setItem('selectedItem', JSON.stringify(this.listItems));
      });
  }


}
