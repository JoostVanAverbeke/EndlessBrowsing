import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollTableDemoComponent } from './virtual-scroll-table-demo.component';

describe('VirtualScrollTableDemoComponent', () => {
  let component: VirtualScrollTableDemoComponent;
  let fixture: ComponentFixture<VirtualScrollTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
