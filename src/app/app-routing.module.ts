import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '',                    component:HomeComponent},
    {path: 'cadastrar-alunos',                    component:CadastrarAlunosComponent},
    {path: 'cadastrar-produtos',                  component:CadastrarProdutosComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
