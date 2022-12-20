import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-q4-c3',
  templateUrl: './q4-c3.component.html',
  styleUrls: ['./q4-c3.component.css']
})
export class Q4C3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() textString = "";

}
