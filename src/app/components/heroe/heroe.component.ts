import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
heroe: any = {};
img: string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
this.activatedRoute.params.subscribe(params => {

  this.heroe = this._heroesService.getHeroe(params['id'] );
  this.img = this.retornarImg();
  console.log(this.img);
});

  }
  retornarImg(): string {
  if ( this.heroe.casa === 'Marvel' ) {
 return '../assets/img/marvel-logo.png';
  } else {
    return '../assets/img/dc-logo.jpg';
  }
  }



}
