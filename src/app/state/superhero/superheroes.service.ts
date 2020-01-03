
import { Injectable } from '@angular/core';

import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { ID } from '@datorama/akita';

import { SuperheroesStore } from './superheroes.store';

import { superheroes as sHeroes } from './superhero.data';

@Injectable({providedIn: 'root'})
export class SuperheroesService {
    constructor(private superheroesStore: SuperheroesStore) {}

    getSuperheroes() {
        timer(1000)
            .pipe(mapTo(sHeroes))
            .subscribe(superheroes => {
                this.superheroesStore.set(superheroes);
            });
    }

    getSuperhero(id: ID) {
        const sHero = sHeroes.find(s => +s.id === +id);

        timer(100)
            .pipe(mapTo(sHero))
            .subscribe(superhero => {
                this.superheroesStore.add(superhero);
            });
    }

}
