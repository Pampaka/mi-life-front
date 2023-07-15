import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FinancePageComponent } from './pages/finance-page/finance-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { InnovationsPageComponent } from './pages/innovations-page/innovations-page.component'

@NgModule({
	declarations: [AppComponent, MainPageComponent, BooksPageComponent, FilmsPageComponent, FinancePageComponent, GamesPageComponent, InnovationsPageComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
