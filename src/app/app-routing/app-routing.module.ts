import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from '../user-table/user-table.component';
import { BasicVirtualScrollExampleComponent } from '../basic-virtual-scroll-example/basic-virtual-scroll-example.component';
import { VirtualScrollSortExampleComponent } from '../virtual-scroll-sort-example/virtual-scroll-sort-example.component';
import { TableBasicExampleComponent } from '../table-basic-example/table-basic-example.component';
import { InfiniteScrollTableDemoComponent } from '../infinite-scroll-table-demo/infinite-scroll-table-demo.component';
import { VirtualScrollTableDemoComponent} from '../virtual-scroll-table-demo/virtual-scroll-table-demo.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserTableComponent
  },
  {
    path: 'basic-virtual-scroll',
    component: BasicVirtualScrollExampleComponent
  },
  {
    path: 'virtual-scroll-sort',
    component: VirtualScrollSortExampleComponent
  },
  {
    path: 'table-virtual-scroll',
    component: TableBasicExampleComponent
  },
  {
    path: 'infinite-table-scroll',
    component: InfiniteScrollTableDemoComponent
  },
  {
    path: 'virtual-scroll-table-demo',
    component: VirtualScrollTableDemoComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
