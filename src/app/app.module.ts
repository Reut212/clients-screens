import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client1/header/header.component';
import { BodyComponent } from './client1/body/body.component';
import { WelcomeComponent } from './client1/body/welcome/welcome.component';
import { PersonalDetailesComponent } from './client1/body/personal-detailes/personal-detailes.component';
import { SummaryComponent } from './client1/body/summary/summary.component';
import { MatCardModule } from '@angular/material/card';
import { ClientComponent } from './client1/client.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    WelcomeComponent,
    PersonalDetailesComponent,
    SummaryComponent,
    ClientComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
