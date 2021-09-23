import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'game', pathMatch: 'full' },
      {
        path: 'game',
        loadChildren: () =>
          import('src/app/core/modules/dashboard/home/home.module').then(
            (m) => m.HomeModule,
          )
      },
      {
        path: 'slots',
        loadChildren: () =>
          import('src/app/core/modules/dashboard/home/home.module').then(
            (m) => m.HomeModule,
          )
      },
    
    {
    path: 'new',
    loadChildren: () =>
      import('src/app/core/modules/dashboard/home/home.module').then(
        (m) => m.HomeModule,
      )
  },
  {
    path: 'other',
    loadChildren: () =>
      import('src/app/core/modules/dashboard/home/home.module').then(
        (m) => m.HomeModule,
      )
  }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class DashboardRoutingModule { }
