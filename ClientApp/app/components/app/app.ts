import { Aurelia } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from '../contact-detail/web-api';

@inject(WebAPI)
export class App {
  router: Router;
  constructor(public api: WebAPI) {}
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: '../no-selection/no-selection',   title: 'Select'},
      { route: 'contacts/:id',  moduleId: '../contact-detail/contact-detail', name:'contacts' }
    ]);

    this.router = router;
  }
}