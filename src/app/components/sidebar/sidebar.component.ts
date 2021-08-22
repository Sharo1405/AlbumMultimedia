import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/archivarfoto', title: 'Archivar Fotografías',  icon: 'card_travel', class: '' },
    { path: '/visualizacion', title: 'Vizualizar Expediente',  icon:'insert_photo', class: '' },
    { path: '/papelera', title: 'Papelera',  icon:'delete', class: '' },
    { path: '/cambiosexp', title: 'Cambios Expediente',  icon:'update', class: '' },
    { path: '/asociar', title: 'Asociar Expediente',  icon:'sync', class: '' },
    { path: '/desasociar', title: 'Desasociar Expediente',  icon:'sync_disabled', class: '' },
    { path: '/logsistema', title: 'Log del Sistema',  icon:'schedule', class: '' },
    { path: '/descarga', title: 'Descargar Expediente',  icon:'file_download', class: '' },    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
