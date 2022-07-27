import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './pages/telas/tela-inicial/tela-inicial.component';
import { LoginComponent } from './pages/telas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheDeUmGameComponent } from './pages/telas/detalhe-de-um-game/detalhe-de-um-game.component';
import { HttpClientModule } from '@angular/common/http';
import { TelaInicialPosLoginComponent } from './pages/telas/tela-inicial-pos-login/tela-inicial-pos-login.component';
import { TelaCadastroComponent } from './pages/telas/tela-cadastro/tela-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    LoginComponent,
    DetalheDeUmGameComponent,
    TelaInicialPosLoginComponent,
    TelaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
