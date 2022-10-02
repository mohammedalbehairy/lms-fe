import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataApproveComponent } from './components/data-approve/data-approve.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'data-approve',
    component: DataApproveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShuftiproRoutingModule {}
