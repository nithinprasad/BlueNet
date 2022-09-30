import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/model/Document';
import { DocumentHistory } from 'src/app/model/DocumentHistory';
import { DiagramApiService } from 'src/app/service/diagram-service.service';

@Component({
  selector: 'app-side-steps',
  templateUrl: './side-steps.component.html',
  styleUrls: ['./side-steps.component.css']
})
export class SideStepsComponent implements OnInit {

  @Input() lastRevsion!: DocumentHistory;
  @Input()
  callbackFunction!: () => void;
  @Input()
  document!: Document;

  public steps: Array<StepObj> = [];

  constructor(public diagramService: DiagramApiService) { }

  ngOnInit(): void {
    this.deriveSteps();
  }

  public doSwitch() {
    this.callbackFunction();
  }

  public deriveSteps() {
    let models = this.diagramService.getRevisionById(this.document.id, this.document.revisions.length).subscribe({
      next: data => {
        let dataObj = data.diagram;
        if (dataObj.data) {
          let obj = JSON.parse(dataObj.data);
          this.findNodes(obj.nodes)
        }

      }
    });
  }

  private findNodes(nodes: Array<any>) {
    nodes.forEach((element) => {
      let shape = element.shape.shape
      let content = this.findAnnotation(element.annotations)
      this.steps.push(this.createObj(content, shape))
    });
  }

  private createObj(content: string, type: string): StepObj {
    return {
      "content": content,
      "type": type
    }
  }

  private findAnnotation(annotations: Array<any>): string {
    return annotations[annotations.length - 1].content;
  }

}

interface StepObj {
  content: string,
  type: string
}