import {ContentChild, Directive, forwardRef, Input, OnChanges, OnInit} from '@angular/core';
import {CdkVirtualScrollViewport, VIRTUAL_SCROLL_STRATEGY} from "@angular/cdk/scrolling";
import {combineLatest, Observable} from "rxjs";
import {MatTable} from "@angular/material";
import {map} from "rxjs/operators";
import {TableVirtualScrollStrategy} from "./table-virtual-scroll-strategy";

export function scrollStrategyFactory(scroll: TableFixedSizeVirtualScroll) {
  return scroll.scrollStrategy;
}

@Directive({
  selector: 'cdk-virtual-scroll-viewport[tableData]',
  providers: [{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: scrollStrategyFactory,
    deps: [forwardRef(() => TableFixedSizeVirtualScroll)],
  }]
})
export class TableFixedSizeVirtualScroll implements OnChanges, OnInit {
  @Input()
  rowHeight: number = 40;

  @Input()
  offset: number = 40;

  @Input()
  tableData!: Observable<Array<any>>;

  @ContentChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  @ContentChild(MatTable)
  table: MatTable<any>;

  public scrollStrategy = new TableVirtualScrollStrategy(this.rowHeight, this.offset);

  public ngOnInit() {
    /*
      When the one of the observables this.tableData, or this.viewport.renderedRangeStream emits a value,
      emit the latest value from each.

      this.tableData is an Observable<Array<any>>, a stream that emits an array of any type.
      this.viewport.renderedRangeStream is an Observable<ListRange>,
      A stream that emits whenever the rendered range changes.

      Here we return a sliced Array of any beginning at emitted ListRange.start and ending at the ListRange.end.
     */
    this.table.dataSource = combineLatest([this.tableData, this.viewport.renderedRangeStream]).pipe(
      map((value) => {
        console.log("viewport start = " + value[1].start + ", end = ", value[1].end)
        return value[0].slice(value[1].start, value[1].end);
      })
    );

    // TODO: cleanup the subscription
    this.tableData.subscribe((data) => {
      this.scrollStrategy.setDataLength(data.length);
    });
  }

  public ngOnChanges() {
    this.scrollStrategy.setScrollHeight(this.rowHeight, this.offset);
  }
}

