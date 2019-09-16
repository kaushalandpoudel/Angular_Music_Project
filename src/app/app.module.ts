import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { CustomMaterialModule } from './custommaterial.module';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MainNavComponent } from './sidenav-bar/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSliderModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { LeftViewComponent } from './middle-section/left-view/left-view.component';
import { RigntViewComponent } from './middle-section/rignt-view/rignt-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TableExpandableRowsExample } from './middle-section/middle-view/data-table/data-table.component';
import { MiddleViewComponent } from './middle-section/middle-view/middle-view/middle-view.component';
import { LoginFormComponent } from './middle-section/login-form/login-form.component';
import { SignupFormComponent } from './middle-section/signup-form/signup-form.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AuthGuard} from './services/auth-guard.service';
import { UploadFormComponent } from './middle-section/rignt-view/upload-form/upload-form.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { UploaddatePipe } from './shared/uploaddate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MiddleSectionComponent,
    AudioPlayerComponent,
    MainNavComponent,
    LeftViewComponent,
    RigntViewComponent,
    TableExpandableRowsExample,
    MiddleViewComponent,
    LoginFormComponent,
    SignupFormComponent,
    UploadFormComponent,
    UploaddatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    NgMatSearchBarModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    HttpClientModule,
    DragDropModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAj6Py9YjezxIkJydvUXTbnktdqAYvsTQ0",
      authDomain: "music-project-7e5d2.firebaseapp.com",
      databaseURL: "https://music-project-7e5d2.firebaseio.com",
      projectId: "music-project-7e5d2",
      storageBucket: "music-project-7e5d2.appspot.com",
      messagingSenderId: "624403091251",
      appId: "1:624403091251:web:9267ed83b0d35295"
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxAudioPlayerModule,
    

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
