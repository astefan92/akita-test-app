import { Injectable } from '@angular/core';

import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';

import { Superhero } from './superhero.model';

export interface SuperheroState extends EntityState<Superhero> {}

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'superheroes' })
export class SuperheroesStore extends EntityStore<SuperheroState, Superhero> {
    constructor() {
        super();
    }
}
