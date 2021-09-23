import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [CommonModule, UnauthorizedRoutingModule,CardModule],
})
export class UnauthorizedModule {}
