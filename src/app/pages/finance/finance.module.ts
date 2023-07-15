import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FinanceRoutingModule } from './finance-routing.module'

@NgModule({
	imports: [CommonModule, FinanceRoutingModule],
	exports: [FinanceRoutingModule]
})
export class FinanceModule {}
