import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'list-page', loadChildren: () => import('../../_pages/list/list.module').then(m => m.ListModule)},
  {path: 'details/:id', loadChildren: () => import('../../_pages/details/details/details.module').then(m => m.DetailsModule)},
   {path: '**', loadChildren: () => import('../../_pages/list/list.module').then(m => m.ListModule)}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
