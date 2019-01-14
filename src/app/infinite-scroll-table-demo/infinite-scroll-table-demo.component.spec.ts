import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollTableDemoComponent } from './infinite-scroll-table-demo.component';

describe('InfiniteScrollTableDemoComponent', () => {
  let component: InfiniteScrollTableDemoComponent;
  let fixture: ComponentFixture<InfiniteScrollTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
