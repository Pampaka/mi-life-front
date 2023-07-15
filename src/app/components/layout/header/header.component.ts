import { Component, OnInit } from '@angular/core'
import { MAIN_PATH } from '../../../utils/paths'
import { Router, Routes } from '@angular/router'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	mainLink = MAIN_PATH
	navLinks: Routes = []
	constructor(private router: Router) {}

	ngOnInit() {
		this.router.config.forEach(route => {
			if (route?.data?.['isNav']) this.navLinks.push(route)
		})
	}
}
