import { Injectable } from '@angular/core';
import { DiagramDTO } from '../model/DiagramDto';
import { DiagramRevison } from '../model/DiagramRevison';

@Injectable({
  providedIn: 'root'
})
export class DiagramServiceService {

  constructor() { }

  private diagramStore: DiagramDTO[] = [];

  public saveDiagram(id: string, revision: DiagramRevison): number | undefined {
    let dto = this.findById(id);
    if (dto == undefined) {
      revision.set_id(1);
      dto = new DiagramDTO(id, [])
      this.diagramStore.push(dto);
    }
    let currRevsion = dto.model.length + 1;
    revision.set_id(currRevsion++);
    dto.model.push(revision);
    const index = this.findIndex(id);
    if (index > -1) {
      this.diagramStore.splice(index, 1);
    }
    this.diagramStore.push(dto);
    console.log(this.diagramStore);
    return revision.id;
  }
  findCurrentRevsion(dto: DiagramDTO): number | undefined {
    if (dto) {
      //dto.model.length ? Math.max(...dto.model.map(function (revision: DiagramRevison) { return revision.id ? revision.id : 0; })) : 0;
      return dto.model.length;
    }
    return 0;
  }

  public findById(id: string): DiagramDTO | undefined {
    return this.diagramStore.find(x => x.id == id);
  }

  public findIndex(id: string): number {
    return this.diagramStore.findIndex(x => x.id == id);
  }
}
