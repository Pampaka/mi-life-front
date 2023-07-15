import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InnovationsRoutingModule } from './innovations-routing.module'

@NgModule({
	imports: [CommonModule, InnovationsRoutingModule],
	exports: [InnovationsRoutingModule]
})
export class InnovationsModule {}
