import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonPieColorPipe } from './pokemon-pie-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

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
    PokemonFormComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [PokemonService],
})
export class PokemonModule { 

}
