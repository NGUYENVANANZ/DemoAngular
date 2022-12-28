import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ShowComponent } from './doremon/show/show.component';
import { CreatComponent } from './doremon/creat/creat.component';
import { EditComponent } from './doremon/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CreatComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
