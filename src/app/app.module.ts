import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramComponents } from './component/diagram/diagram.component';
import { DiagramModule, SymbolPaletteAllModule, UndoRedo } from '@syncfusion/ej2-angular-diagrams';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RevisionHeaderComponent } from './component/revision-header/revision-header.component';
import { RevisionModelComponent } from './component/revision-model/revision-model.component';
import { TabularModelComponent } from './component/tabular-model/tabular-model.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { SideStepsComponent } from './component/side-steps/side-steps.component';

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { DocumentListComponent } from './component/document-list/document-list.component';
import { DocumentDetailsComponent } from './component/document-details/document-details.component';
import { HttpClientModule } from '@angular/common/http';
const firebaseConfig = {
  apiKey: "AIzaSyBgZEJVhqznN9Nyz8ln-EtXyKhDohJ6sYM",
  authDomain: "bluenet-demo.firebaseapp.com",
  projectId: "bluenet-demo",
  storageBucket: "bluenet-demo.appspot.com",
  messagingSenderId: "841036696495",
  appId: "1:841036696495:web:e5257b43e1ec3429e03d5a",
  measurementId: "G-0FSK0XWF54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@NgModule({
  declarations: [
    AppComponent,
    DiagramComponents,
    RevisionHeaderComponent,
    RevisionModelComponent,
    TabularModelComponent,
    MainMenuComponent,
    SideMenuComponent,
    SideStepsComponent,
    LandingPageComponent,
    DocumentListComponent,
    DocumentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
    SymbolPaletteAllModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
