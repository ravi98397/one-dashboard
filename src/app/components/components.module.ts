import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SublevelMenuComponent } from './side-nav/sublevel-menu.component';
import { MultiFilterTableComponent } from './multi-filter-table/multi-filter-table.component';

//mat imports
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirectiveDirective } from './multi-filter-table/click-outside-directive.directive';





@NgModule({
  declarations: [
    SideNavComponent,
    SublevelMenuComponent,
    MultiFilterTableComponent,
    ClickOutsideDirectiveDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  providers: [DatePipe],
  exports: [
    SideNavComponent,
    MultiFilterTableComponent
  ]
})
export class ComponentsModule { }
