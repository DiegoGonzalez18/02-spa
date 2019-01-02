import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',

})
export class BuscarComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute , private _heroesService: HeroesService ,
    private _router: Router) {
  }
 

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
     console.log(params['termino']);
     this.termino =  params['termino'];
     this.heroes = this._heroesService.buscarHeroes(params['termino']);
     console.log(this.heroes);
    });
  }

}
