import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVirtualScrollExampleComponent } from './basic-virtual-scroll-example.component';

describe('BasicVirtualScrollExampleComponent', () => {
  let component: BasicVirtualScrollExampleComponent;
  let fixture: ComponentFixture<BasicVirtualScrollExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVirtualScrollExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVirtualScrollExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
