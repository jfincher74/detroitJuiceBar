import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { AboutComponent }   from './components/about/about.component';
import { HomeComponent }   from './components/home/home.component';
import { MenuComponent }  from './components/menu/menu.component';
@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  RouterModule.forRoot([
                    { path: 'Home', component: HomeComponent },
                    { path: 'Menu', component: MenuComponent },
                    { path: 'About', component: AboutComponent },
                    { path: '', component: HomeComponent },
                    { path: "**", component: HomeComponent }
                  ])
                ],
  declarations: [ AppComponent, MenuComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }