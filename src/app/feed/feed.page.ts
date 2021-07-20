import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage{


  @ViewChild('text') text;

  public feed;
  inputTexto:String = "";
  loginatual = this.data.logado;
  usuarioatual = this.data.usuario;

  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router, public data: InfoService) {
    this.getFeed();
    this.returnFeed();
   }

  getFeed(){
    this.feed = []
    this.http.get<any[]>("http://localhost/api/feed.php")
              .subscribe( dados => {
                 dados.forEach( item => {
                  this.feed.push([item.name, item.posts]);
                 })
              })             
  }

  post(){
    this.http.get<any[]>("http://localhost/api/post.php?post="+ this.inputTexto + "&user=" + this.loginatual + "&name=" + this.usuarioatual)
        .subscribe( dados => {
          this.getFeed();
        })

    this.inputTexto="";
    
  }

  returnFeed(){
    return this.feed;
  }
  
}
