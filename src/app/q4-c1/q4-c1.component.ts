import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-q4-c1',
  templateUrl: './q4-c1.component.html',
  styleUrls: ['./q4-c1.component.css']
})
export class Q4C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() textString = "";
}
