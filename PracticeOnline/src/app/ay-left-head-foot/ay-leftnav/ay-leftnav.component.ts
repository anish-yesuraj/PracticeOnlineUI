import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

//declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'dashboard', class: '' },
    { path: '/questions', title: 'Questions',  icon:'live_help', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-ay-leftnav',
  templateUrl: './ay-leftnav.component.html',
  styleUrls: ['./ay-leftnav.component.css']
})
export class AyLeftnavComponent implements OnInit {
  
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };
}
