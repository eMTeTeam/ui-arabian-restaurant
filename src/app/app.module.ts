import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
