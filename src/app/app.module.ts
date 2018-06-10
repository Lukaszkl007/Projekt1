import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Tabela2Component } from './tabela2/tabela2.component';
import { Tabela3Component } from './tabela3/tabela3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    Tabela1Component,
    Tabela2Component,
    Tabela3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
