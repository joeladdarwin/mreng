import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = [ {src:'assets/img/menu-3.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-1.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-2.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-1.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-2.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-3.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-1.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-2.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-2.jpg', name: 'test', description: 'test des'},
  {src:'assets/img/menu-3.jpg', name: 'test', description: 'test des'}

]
  ngOnInit() {
  }

}
