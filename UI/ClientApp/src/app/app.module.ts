import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
   HeaderComponent,
   FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
