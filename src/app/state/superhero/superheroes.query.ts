import { Injectable } from '@angular/core';

import { switchMap } from 'rxjs/operators';

import { QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';

import { SuperheroState, SuperheroesStore } from './superheroes.store';
import { Superhero } from './superhero.model';

@Injectable({ providedIn: 'root' })
export class SuperheroesQuery extends QueryEntity<SuperheroState, Superhero> {
    selectSuperhero$ = this.routerQuery.selectParams('id').pipe(
        switchMap(id => this.selectEntity(id))
    );

    constructor(protected store: SuperheroesStore,
                private routerQuery: RouterQuery) {
        super(store);
    }
}
