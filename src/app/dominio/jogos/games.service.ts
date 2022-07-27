import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrlTinDin;
const RECURSO = API+'/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient,
  ) { }

  obterTodas(){
    return this.http.get<any>(RECURSO);
  }

  pegarUmGame(id: string){
    return this.http.get<any>(RECURSO+'/'+id);
  }
}