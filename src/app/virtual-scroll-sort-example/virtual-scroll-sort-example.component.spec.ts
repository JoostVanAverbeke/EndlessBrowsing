import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollSortExampleComponent } from './virtual-scroll-sort-example.component';

describe('VirtualScrollSortExampleComponent', () => {
  let component: VirtualScrollSortExampleComponent;
  let fixture: ComponentFixture<VirtualScrollSortExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollSortExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollSortExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
