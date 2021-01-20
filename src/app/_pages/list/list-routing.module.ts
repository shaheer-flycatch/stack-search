import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from 'src/app/_pages/details/details/details.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [{ path: '', component: ListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
