import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BOOKS_PATH, FILMS_PATH, FINANCE_PATH, GAMES_PATH, INNOVATIONS_PATH, MAIN_PATH } from './utils/paths'

const routes: Routes = [
	{
		path: MAIN_PATH,
		loadChildren: () => import('./pages/main/main.module').then(x => x.MainModule)
	},
	{
		path: BOOKS_PATH,
		loadChildren: () => import('./pages/books/books.module').then(x => x.BooksModule),
		data: { title: 'Книги', isNav: true }
	},
	{
		path: FILMS_PATH,
		loadChildren: () => import('./pages/films/films.module').then(x => x.FilmsModule),
		data: { title: 'Фильмы', isNav: true }
	},
	{
		path: FINANCE_PATH,
		loadChildren: () => import('./pages/finance/finance.module').then(x => x.FinanceModule),
		data: { title: 'Финансы', isNav: true }
	},
	{
		path: GAMES_PATH,
		loadChildren: () => import('./pages/games/games.module').then(x => x.GamesModule),
		data: { title: 'Игры', isNav: true }
	},
	{
		path: INNOVATIONS_PATH,
		loadChildren: () => import('./pages/innovations/innovations.module').then(x => x.InnovationsModule),
		data: { title: 'Начинания', isNav: true }
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
