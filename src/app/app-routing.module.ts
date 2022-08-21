import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { DocumentListComponent } from './component/document-list/document-list.component';
import { RevisionHeaderComponent } from './component/revision-header/revision-header.component';

const routes: Routes = [
  { path: '', component: DocumentListComponent },
  { path: 'document/:id', component: RevisionHeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
