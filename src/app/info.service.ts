import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  logado;
  usuario;
  info = {
    users: []
  };

  constructor() { }
}
