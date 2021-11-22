import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchSightsComponent } from './components/search-sights/search-sights.component';
import { UpdateSightComponent } from './components/update-sight/update-sight.component';
import { SightComponent } from './components/sight/sight.component';
import { RatingComponent } from './components/rating/rating.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSightsComponent,
    UpdateSightComponent,
    SightComponent,
    RatingComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
