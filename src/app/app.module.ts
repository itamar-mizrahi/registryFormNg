import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RunScreenComponent } from './run-screen/run-screen.component';
import { TrackRegisterScreenComponent } from './track-register-screen/track-register-screen.component';
import {HttpClientModule} from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatButtonToggleModule, MatProgressBarModule, MatDialogModule, MatStepperModule, MatFormFieldModule, MatCheckboxModule} from '@angular/material';
import { FormComponent } from './loading-screen/form/form.component';
import { MaterialModule } from './material/material.module';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    HomePageComponent,
    RunScreenComponent,
    TrackRegisterScreenComponent,
    PreviewComponent,
    FormComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  entryComponents:[
    DialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
