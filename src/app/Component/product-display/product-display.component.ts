import { Component, Input, OnInit } from '@angular/core';
import STLViewer from 'stl-viewer';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  constructor() { }
  @Input() product: any;
  ngOnInit() {
  }

}
