import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@nx02/material';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
