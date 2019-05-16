import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeComponent }   from '../components/home/home.component';
import { MenuComponent }  from '../components/menu/menu.component';
@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  RouterModule.forRoot([
                    { path: 'Home', component: HomeComponent },
                    { path: 'Menu', component: MenuComponent },
                    { path: '', component: HomeComponent },
                    { path: "**", component: HomeComponent }
                  ])
                ],
  declarations: [ AppComponent, MenuComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
