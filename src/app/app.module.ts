import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDowmMenuComponent } from './components/drop-dowm-menu/drop-dowm-menu.component';
import { OutsideClickDirective } from './directives/outside-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropDowmMenuComponent,
    OutsideClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
