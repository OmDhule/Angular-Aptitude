import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-q4-c2',
  templateUrl: './q4-c2.component.html',
  styleUrls: ['./q4-c2.component.css']
})
export class Q4C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() textString = "";
}
