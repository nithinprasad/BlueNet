import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Document } from 'src/app/model/Document';
import { ConnectorModel, Diagram, FlowShapeModel, NodeModel, PaletteModel, SnapConstraints, SnapSettingsModel, UndoRedo } from '@syncfusion/ej2-diagrams';
import { DiagramRevison } from 'src/app/model/DiagramRevison';
import { DiagramApiService } from 'src/app/service/diagram-service.service';
import { NodeModelsBasicService } from 'src/app/service/node-models-basic.service';
import { DocumentHistory } from 'src/app/model/DocumentHistory';
import { Router } from '@angular/router';
Diagram.Inject(UndoRedo);
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagramComponents implements OnInit {
  @ViewChild("diagram")
  public diagram!: Diagram;

  @Input() document!: Document;

  constructor(public service: NodeModelsBasicService, public diagramService: DiagramApiService, private router: Router) {

  }
  ngOnInit(): void {
    let target = {
      "target": {
        "value": this.document.revisions.length
      }
    }
    this.updateDiagram(target);
  }

  public snapSettings: SnapSettingsModel = {
    // Display both Horizontal and Vertical gridlines
    constraints: SnapConstraints.None | SnapConstraints.SnapToLines
  };

  public created(): void {

  }

  public undo(): void {
    this.diagram.undo();
  }

  public redo(): void {
    this.diagram.redo();
  }

  public save(): void {
    let res = this.diagram.saveDiagram();
    let history: DocumentHistory = new DocumentHistory();
    let input = {
      "description": "Sample",
      "preparedBy": "current User",
      "data": ""
    };
    input.data = res;
    console.log("here");
    console.log(input);
    this.diagramService.createRevision(this.document.id, input).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/document', this.document.id]).then(() => {
          window.location.reload();
        });
      }
    });

  }

  isRevisionAvailable() {
    let models = this.document.revisions;

    if (models) {
      return models.length;
    }
    return 0;
  }

  updateDiagram(target: any): void {
    let selectedRevision = target.target.value;
    let models = this.diagramService.getRevisionById(this.document.id, selectedRevision).subscribe({
      next: data => {
        let dataObj = data.diagram;
        if (dataObj.data) {
          console.log(dataObj.data);
          this.diagram.loadDiagram(dataObj.data);
        }

      }
    });
  }


  public start: FlowShapeModel = {
    type: 'Flow',
    shape: 'Terminator',

  };

  public stop: FlowShapeModel = {
    type: 'Flow',
    shape: 'Terminator'
  };


}


