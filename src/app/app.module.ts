import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { UserTableComponent } from './user-table/user-table.component';
import {ScrollDispatchModule, ScrollingModule} from "@angular/cdk/scrolling";
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { BasicVirtualScrollExampleComponent } from './basic-virtual-scroll-example/basic-virtual-scroll-example.component';
import { VirtualScrollSortExampleComponent } from './virtual-scroll-sort-example/virtual-scroll-sort-example.component';
import { InfiniteScrollTableDemoComponent } from './infinite-scroll-table-demo/infinite-scroll-table-demo.component';
import { VirtualScrollTableDemoComponent } from './virtual-scroll-table-demo/virtual-scroll-table-demo.component';
import {FormsModule} from "@angular/forms";
import {TableVirtualScrollStrategy} from "./table-virtual-scroll-strategy";
import {TableFixedSizeVirtualScroll} from "./table-fixed-size-virtual-scroll.directive";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserTableComponent,
    TableBasicExampleComponent,
    BasicVirtualScrollExampleComponent,
    VirtualScrollSortExampleComponent,
    InfiniteScrollTableDemoComponent,
    VirtualScrollTableDemoComponent,
    TableFixedSizeVirtualScroll
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ScrollingModule,
    FormsModule,
    ScrollDispatchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
