import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAdderComponent } from './student-adder/student-adder.component';

const appRouters:Routes=[
  {path:'', component:StudentListComponent},
  {path:'add', component:StudentAdderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAdderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
