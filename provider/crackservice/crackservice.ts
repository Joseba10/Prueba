import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { RequestOptions } from '@angular/http';

@Injectable()
export class CrackserviceProvider {

  public url: string;
 
  constructor(public http: HttpClient,public platform: Platform) {
    console.log('Hello CrackserviceProvider Provider');

   if(this.platform.is('core')){
    this.url='/crackApi';
   }else{

    this.url='http://api.crackwatch.com/api/games';

   }
   
  }
/*
 "proxies":[{
    "path": "/crackApi",
    "proxyUrl": "http://api.crackwatch.com/api/games"
  }]
*/

  getDatos(){
    var headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
      'Accept':'application/json',
      'content-type':'application/json'
    });

    return  this.http.get(this.url, {'headers': headers});


  }

}
