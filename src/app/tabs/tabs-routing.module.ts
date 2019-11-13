import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {ComicsListComponent} from '../components/comics-list/comics-list.component';

const routes: Routes = [
  {
    path: 'comics',
    component: ComicsListComponent,
  },
  {
    path: '',
    redirectTo: '/comics',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
