import { Component, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-notes-front';

  private _noteList: any[] = [{ id: 1, value: 'teste' }, { id: 1, value: 'teste2' }, { id: 1, value: 'teste3' }];

  private pos1: number = 0;
  private pos2: number = 0;
  private pos3: number = 0;
  private pos4: number = 0;



  constructor() {

  }

  get noteList(): any[] {
    return this._noteList;
  }

  teste(event: any) {
    this.drag(event)
  }




  elementDrag = (e: any) => {
    e = e || window.event;

    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    e.target.style.top = (e.target.offsetTop - this.pos2) + "px";
    e.target.style.left = (e.target.offsetLeft - this.pos1) + "px";

  }

  closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;

  }

  drag(e: any) {


    this.pos1 = 0
    this.pos2 = 0
    this.pos3 = 0
    this.pos4 = 0

    e = e || window.event;
    e.preventDefault();



    this.pos3 = e.clientX;
    this.pos4 = e.clientY;

    document.onmouseup = this.closeDragElement;

    document.onmousemove = this.elementDrag;
  }



}
