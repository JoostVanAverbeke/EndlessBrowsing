import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-virtual-scroll-example',
  templateUrl: './basic-virtual-scroll-example.component.html',
  styleUrls: ['./basic-virtual-scroll-example.component.scss']
})
export class BasicVirtualScrollExampleComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}
