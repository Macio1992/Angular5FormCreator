import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ActualForm } from './components/actual-form';
import { CreateForm } from './components/create-form';

@NgModule({
  declarations: [
    AppComponent,
    CreateForm,
    ActualForm
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }