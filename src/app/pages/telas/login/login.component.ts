import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [''],
  });
  }

  pesquisaForm(){
    let resposta = this.formToModel();
    alert(resposta);
  }

  
  clicanobotao(){
    console.log('abrir tela inicialposlogin');
    this.router.navigate(['TelaInicialPosLogin']);
  }

  formToModel(){
    let dadosForm = this.form.getRawValue() as any;
    return dadosForm.title;
    
 }

}
