import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PrimeNgModule} from 'src/app/core/modules/primeNg.module';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PrimeNgModule],
  exports: [HomeComponent],
})
export class HomeModule {}
