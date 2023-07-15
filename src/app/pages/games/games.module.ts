import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GamesRoutingModule } from './games-routing.module'

@NgModule({
	imports: [CommonModule, GamesRoutingModule],
	exports: [GamesRoutingModule]
})
export class GamesModule {}
