import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ExcludeThoughtsComponent } from './components/thoughts/exclude-thoughts/exclude-thoughts.component';
import { EditThoughtsComponent } from './components/thoughts/edit-thoughts/edit-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtsComponent
  },
  {
    path: 'listarPensamento',
    component: ListThoughtsComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcludeThoughtsComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditThoughtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
