import { Component, OnInit } from '@angular/core';
import { SuperheroesQuery } from '../state/superhero/superheroes.query';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss']
})
export class SuperheroComponent implements OnInit {
  superhero$ = this.superheroesQuery.selectSuperhero$;

  constructor(private superheroesQuery: SuperheroesQuery) { }

  ngOnInit() { }

}
