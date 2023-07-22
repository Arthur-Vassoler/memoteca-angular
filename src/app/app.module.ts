import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { EditThoughtsComponent } from './components/thoughts/edit-thoughts/edit-thoughts.component';
import { ButtonLoadMoreComponent } from './components/thoughts/list-thoughts/button-load-more/button-load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ListThoughtsComponent,
    ThoughtComponent,
    EditThoughtsComponent,
    ButtonLoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
