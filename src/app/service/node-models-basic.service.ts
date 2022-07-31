import { Injectable } from '@angular/core';
import { ConnectorConstraints, ConnectorModel, HtmlModel, NativeModel, NodeModel, PaletteModel } from '@syncfusion/ej2-diagrams';
@Injectable({
  providedIn: 'root'
})
export class NodeModelsBasicService {


  constructor() { }

  public symbolPalette: PaletteModel[] = [
    {
      id: 'startend',
      symbols: this.getStartStop(),
      title: 'Terminal',
      expanded: true,
    },
    {
      id: 'pullID',
      symbols: this.getRectangle('pull'),
      title: 'Pull Material',
      expanded: false,
    },
    {
      id: 'inspection',
      symbols: this.getDiamond(),
      title: 'Inspection',
      expanded: false
    },
    {
      id: 'productionId',
      symbols: this.getRectangle('production'),
      title: 'Production',
      expanded: false
    },
    {
      id: 'storageId',
      symbols: this.getRectangle('storage'),
      title: 'Storage',
      expanded: false
    },
    {
      id: 'assemblyId',
      symbols: this.getRectangle('assembly'),
      title: 'Assembly',
      expanded: false
    },
    {
      id: 'customId',
      symbols: this.getRectangle('custom'),
      title: 'Custom Task',
      expanded: false
    },
    {
      id: 'dispatch',
      symbols: this.getArrow(),
      title: 'Custom Task',
      expanded: false
    },
    {
      id: 'connectors',
      symbols: this.getConnectors(),
      title: 'Connectors',
      expanded: false
    }
  ];

  public getRectangle(id: string): NodeModel[] {
    let basicShapes: NodeModel[] = [
      {
        id: id,

        style: {
          fill: "#6BA5D7",
          strokeColor: "white"
        },
        shape: {
          type: 'Flow',
          shape: 'Process'
        }
      }
    ]
    return basicShapes;
  }

  public getDiamond(): NodeModel[] {
    return [

      {
        id: 'process',
        style: {
          fill: "red",
          strokeColor: "black"
        },
        shape: {
          type: 'Flow',
          shape: 'Decision'
        }
      },
    ];
  }

  public getArrow(): NodeModel[] {
    return [

      {
        id: 'arrow',
        style: {
          fill: "red",
          strokeColor: "black"
        },
        height: 100,
        width: 100,
        shape: this.getArrowNative()
      },
    ];
  }



  getArrowNative(): NativeModel {
    let hml: NativeModel =

    {
      content: ' <?xml version="1.0" standalone="yes"?>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">' +

        '<path style="fill:#1bbd9d; stroke:none;" d="M27 11L27 20L4 20L4 30L27 30L27 39C31.4927 37.9324 45.3642 30.3985 45.3642 25C45.3642 19.632 31.4424 12.1547 27 11z"/>' +
        '<path style="fill:#19bea6; stroke:none;" d="M32 13L33 14L32 13z"/>' +
        '<path style="fill:#33cd99; stroke:none;" d="M36 16L37 17L36 16z"/>' +
        '<path style="fill:#018181; stroke:none;" d="M40 19L41 20L40 19M40 30L41 31L40 30z"/>' +
        '<path style="fill:#33cd99; stroke:none;" d="M36 33L37 34L36 33z"/>' +
        '</svg>'
      ,
      type: 'Native',
      scale: 'Meet'
    }
    return hml;
  }
  public getConnectors(): ConnectorModel[] {
    let connectors: ConnectorModel[] = [
      {
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
        constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
      },
      {
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
        constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
      },
      {
        id: 'Link3',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'Arrow' },
        constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
      }
    ];
    return connectors;
  }

  public getStartStop(): NodeModel[] {
    return [
      {
        id: 'start',
        annotations: [{
          content: 'start'
        }],
        style: {
          fill: "#00FFFF",
          strokeColor: "black"
        },
        shape: {
          type: 'Flow',
          shape: 'Terminator'
        }
      },
      {
        id: 'stop',
        annotations: [{
          content: 'end'
        }],
        style: {
          fill: "#FFC0CB",
          strokeColor: "black"
        },
        shape: {
          type: 'Flow',
          shape: 'Terminator'
        }
      },
    ];
  }
}
