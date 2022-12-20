import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {

  id:any;
  output:any;
  values = [2,3,10,15,26,35,50,63]
  
  constructor() { }

  ngOnInit(): void {
  }
  

  getvalue(){
    this.output=this.values[this.id]
  }


}
