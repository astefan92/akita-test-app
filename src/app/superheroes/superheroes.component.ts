import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SuperheroesService } from '../state/superhero/superheroes.service';
import { SuperheroesQuery } from '../state/superhero/superheroes.query';

import { Superhero } from '../state/superhero/superhero.model';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  superheroes$: Observable<Superhero[]>;
  loading$: Observable<boolean>;

  constructor(
    private superheroesService: SuperheroesService,
    private superheroesQuery: SuperheroesQuery) { }

  ngOnInit() {
    this.superheroes$ = this.superheroesQuery.selectAll();
    this.loading$ = this.superheroesQuery.selectLoading();


    this.superheroesService.getSuperheroes();
  }

}
