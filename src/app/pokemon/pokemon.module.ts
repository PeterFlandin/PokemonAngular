import { NgModule } from "@angular/core";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { PokemonPieColorPipe } from "./pokemon-pie-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const routes: Routes = [
  {path : "edit/pokemon/:id", component : EditPokemonComponent},
  { path: "pokemon/:id", component: DetailPokemonComponent },
  { path: "pokemon", component: ListPokemonComponent },
];

@NgModule({
  declarations: [
    PokemonFormComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonPieColorPipe,
    BorderCardDirective,
    EditPokemonComponent,
  ],
  imports: [CommonModule,FormsModule, RouterModule.forChild(routes)],
  providers: [PokemonService],
})
export class PokemonModule {}
