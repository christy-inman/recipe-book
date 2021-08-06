import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoadingComponent } from './loading/loading.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import {MatCardModule} from '@angular/material/card';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoadingComponent,
    RecipeBookComponent,
    RecipeContainerComponent,
    RecipeCardComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
