import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/dominio/jogos/games.service';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {

  public form!: FormGroup;
  public games!: Game[];
  public game?: Game;
  mostrarMaisJogos = 'mostrar-jogos'
  mmjVoltar = true;
  escrita = 'VIEW MORE PRODUCTS';
  

  constructor( 
    private gamesService: GamesService, 
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.gamesService.obterTodas().subscribe({
      next:
      (resposta)=>{
        this.games = resposta.games;
        console.log(this.games);
        this.game = this.games[0];
       // console.log(resposta);
    }
   }
   )

    this.form = this.formBuilder.group({
      title:[''],
    });
  }

  pesquisaForm(){   
    let resposta = this.formToModel();
    alert(resposta);
    
  }
  
  mostrarMais():void{
    if(this.mmjVoltar){
      document.getElementById('game1')?.classList.add(this.mostrarMaisJogos);
      this.escrita = 'VOLTAR'
      this.mmjVoltar = !this.mmjVoltar;
    }else{
      document.getElementById('game1')?.classList.remove(this.mostrarMaisJogos);
      this.escrita = 'VIEW MORE PRODUCTS'
      this.mmjVoltar = !this.mmjVoltar;
    }
  }


  formToModel(){
    let dadosForm = this.form.getRawValue() as any;
    return dadosForm.title;
    
 }

}

