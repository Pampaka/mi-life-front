import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
	BOOKS_PATH,
	FILMS_PATH,
	FINANCE_PATH,
	GAMES_PATH,
	INNOVATIONS_PATH,
	MAIN_PATH
} from './utils/paths'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { BooksPageComponent } from './pages/books-page/books-page.component'
import { FilmsPageComponent } from './pages/films-page/films-page.component'
import { FinancePageComponent } from './pages/finance-page/finance-page.component'
import { GamesPageComponent } from './pages/games-page/games-page.component'
import { InnovationsPageComponent } from './pages/innovations-page/innovations-page.component'

const routes: Routes = [
	{ path: MAIN_PATH, component: MainPageComponent },
	{ path: BOOKS_PATH, component: BooksPageComponent },
	{ path: FILMS_PATH, component: FilmsPageComponent },
	{ path: FINANCE_PATH, component: FinancePageComponent },
	{ path: GAMES_PATH, component: GamesPageComponent },
	{ path: INNOVATIONS_PATH, component: InnovationsPageComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
