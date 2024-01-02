import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SublevelMenuComponent } from './side-nav/sublevel-menu.component';



@NgModule({
  declarations: [
    SideNavComponent,
    SublevelMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    SideNavComponent
  ]
})
export class ComponentsModule { }
