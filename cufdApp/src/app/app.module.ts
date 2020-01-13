import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
