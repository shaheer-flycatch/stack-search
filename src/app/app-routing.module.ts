import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './_pages/details/details/details.component';
import { ListPageComponent } from './_pages/list/list-page/list-page.component';

const routes: Routes = [{ path: '', component: ListPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
