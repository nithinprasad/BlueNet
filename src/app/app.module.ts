import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramComponents } from './component/diagram/diagram.component';
import { DiagramModule,SymbolPaletteAllModule, UndoRedo } from '@syncfusion/ej2-angular-diagrams';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RevisionHeaderComponent } from './component/revision-header/revision-header.component';
import { RevisionModelComponent } from './component/revision-model/revision-model.component';
import { TabularModelComponent } from './component/tabular-model/tabular-model.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { SideStepsComponent } from './component/side-steps/side-steps.component';
@NgModule({
  declarations: [
    AppComponent,
    DiagramComponents,
    RevisionHeaderComponent,
    RevisionModelComponent,
    TabularModelComponent,
    MainMenuComponent,
    SideMenuComponent,
    SideStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule,
    SymbolPaletteAllModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
