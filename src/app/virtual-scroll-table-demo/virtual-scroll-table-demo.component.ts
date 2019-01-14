import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";

function createData(size: number = 1000) {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push({position: i+1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'});
  }
  return result;
}

@Component({
  selector: 'app-virtual-scroll-table-demo',
  templateUrl: './virtual-scroll-table-demo.component.html',
  styleUrls: ['./virtual-scroll-table-demo.component.scss']
})
export class VirtualScrollTableDemoComponent implements OnInit {

  rows: Observable<Array<any>> = of(createData(50000));

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  gridHeight = 800;

  constructor() {}

  public ngOnInit() {}

}
