import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-q4-c4',
  templateUrl: './q4-c4.component.html',
  styleUrls: ['./q4-c4.component.css']
})
export class Q4C4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() textString = "";

}
