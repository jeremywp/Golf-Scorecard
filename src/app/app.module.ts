import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatInputModule, MatOptionModule, MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CourseComponent } from './course/course.component';
import {CourseService} from "./course.service";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PlayService} from "./play/play.service";
import { NamePipe } from './name.pipe';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    WelcomeComponent,
    CourseComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatTableModule,
    HttpClientModule,
    MatOptionModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [CourseService,
  HttpClient,
  PlayComponent,
  PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
