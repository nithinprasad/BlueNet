import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import { ConnectorModel, Diagram, FlowShapeModel, NodeModel, PaletteModel, SnapConstraints, SnapSettingsModel, UndoRedo } from '@syncfusion/ej2-diagrams';
import { DiagramRevison } from 'src/app/model/DiagramRevison';
import { DiagramServiceService } from 'src/app/service/diagram-service.service';
import { NodeModelsBasicService } from 'src/app/service/node-models-basic.service';
Diagram.Inject(UndoRedo);
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagramComponents {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;


  constructor(public service: NodeModelsBasicService, public diagramService: DiagramServiceService) {
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
    let revsion = new DiagramRevison();
    revsion.set_model(res);
    revsion.set_date(new Date());
    let response = this.diagramService.saveDiagram("1", revsion);

    console.log(response);
  }

  isRevisionAvailable() {
    let models = this.diagramService.findById('1')?.model;
    if (models) {
      return models.length;
    }
    return 0;
  }


  updateDiagram(target: any): void {
    let selectedRevision = target.target.value;
    let models = this.diagramService.findById('1')?.model;
    if (models) {
      let revison = models.find(id => id.id == selectedRevision);
      if (revison?.model) {
        this.diagram.loadDiagram(revison?.model);
        console.log(revison?.model);
      }
    }
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


