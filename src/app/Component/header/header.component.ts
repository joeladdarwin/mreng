import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  products = [{url:'/stall_tables' , name: 'Stall Display Tables'},
  {url:'/culinary_table' , name: 'Culinary Table'},
  {url:'/food_procesing_tables' , name: 'Food Processing Tables'},
  {url:'/wash_basin_sink' , name: 'Wash basin Sink'},
  {url:'/display_stands' , name: 'Display stands'},
  {url:'/trolleys' , name: 'Trolleys'}


]

  ngOnInit() {
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
  }
}
