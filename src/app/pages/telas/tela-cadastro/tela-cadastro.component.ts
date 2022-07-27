import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/dominio/jogos/games.service';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent implements OnInit {

  public form!: FormGroup;
  public games!: Game[];
  public game?: Game;


  
  constructor(
    private gamesService: GamesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  } 
}

