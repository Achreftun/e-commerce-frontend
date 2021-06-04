import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { CommandComponent } from './composants/command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
