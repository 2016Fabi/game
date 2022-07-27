import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/dominio/jogos/games.service';

@Component({
  selector: 'app-detalhe-de-um-game',
  templateUrl: './detalhe-de-um-game.component.html',
  styleUrls: ['./detalhe-de-um-game.component.scss']
})
export class DetalheDeUmGameComponent implements OnInit {

  public form!: FormGroup;
  public game?: any;
  public url?: string;
  public photoprincipal?: string;


  
  constructor(
    private gamesService: GamesService,
    private router: Router,
    private activatedrouter: ActivatedRoute,
  ) { this.pegarGame() }

  ngOnInit(): void {}

  pegarGame(){
    const id = this.activatedrouter.snapshot.paramMap.get('_id');
    this.gamesService.pegarUmGame(id as string ).subscribe({
      next:
      (resposta)=>{
        this.game = resposta.game;
        this.photoprincipal = this.game.photos[0].url;
    }
   }
   )
      
  }

  pesquisaForm(){
    let resposta = this.formToModel();
    alert(resposta);
  }

  
  clicanobotao(){
    console.log('abrir tela de login');
    this.router.navigate(['Login']);
  }

  mudarFoto(url:string){
     this.photoprincipal = url; 
  }

  formToModel(){
    let dadosForm = this.form.getRawValue() as any;
    return dadosForm.title;
  }

  votarGame(){
    this.router.navigate(['/','TelaInicialPosLogin'])
  }

}
