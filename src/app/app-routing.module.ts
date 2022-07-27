import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheDeUmGameComponent } from './pages/telas/detalhe-de-um-game/detalhe-de-um-game.component';
import { LoginComponent } from './pages/telas/login/login.component';
import { TelaCadastroComponent } from './pages/telas/tela-cadastro/tela-cadastro.component';
import { TelaInicialPosLoginComponent } from './pages/telas/tela-inicial-pos-login/tela-inicial-pos-login.component';
import { TelaInicialComponent } from './pages/telas/tela-inicial/tela-inicial.component';

const routes: Routes = [

  {
    path: '',
    component: TelaInicialComponent,
  },   
  {
    path: 'TelaInicial',
    component:  TelaInicialComponent,
  }, 
  {
    path: 'Login',
    component:  LoginComponent,
  }, 
  {
    path: 'DetalheDeUmGame',
    component:  DetalheDeUmGameComponent,
  },
  {
    path: 'TelaInicialPosLogin',
    component:  TelaInicialPosLoginComponent,
  },
  {
    path: 'TelaCadastro',
    component: TelaCadastroComponent,
  },

  {
    path: 'DetalheDeUmGame/:_id',
    component:  DetalheDeUmGameComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
