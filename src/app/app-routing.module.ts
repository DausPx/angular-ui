import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSightComponent } from './components/create-sight/create-sight.component';
import { SearchSightsComponent } from './components/search-sights/search-sights.component';
import { SightComponent } from './components/sight/sight.component';
import { UpdateSightComponent } from './components/update-sight/update-sight.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component:  SearchSightsComponent},
  { path: 'sight/new', component: CreateSightComponent },
  { path: 'sight/:id', component: SightComponent },
  { path: 'sight/update/:id', component: UpdateSightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
