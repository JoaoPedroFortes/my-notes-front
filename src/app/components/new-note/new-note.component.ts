import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {


  @Output()
  drag: EventEmitter<any> = new EventEmitter();

  constructor() { }


  private _note: any;

  ngOnInit(): void {
  }

  mover(e: any) {
    this.drag.emit(e)
  }



  @Input()
  set note(value: any) {
    this._note = value
  }

  get note(): any {
    return this._note;
  }
}
