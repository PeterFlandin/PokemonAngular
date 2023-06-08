import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonPieColorPipe } from './pokemon-pie-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "pokemon", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonPieColorPipe,
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PokemonModule { 

}
