import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flexchart',
  templateUrl: './flexchart.component.html',
  styleUrls: ['./flexchart.component.css']
})
export class FlexchartComponent implements OnInit {
  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
