import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FilmsRoutingModule } from './films-routing.module'

@NgModule({
	imports: [CommonModule, FilmsRoutingModule],
	exports: [FilmsRoutingModule]
})
export class FilmsModule {}
