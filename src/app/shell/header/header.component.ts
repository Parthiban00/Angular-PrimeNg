import { Component, EventEmitter, Output } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';
import { EventData } from 'src/app/shared/classes/event-class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() shrinkSideNav = new EventEmitter<boolean>(false);

  items: any;
  shrinkSideBar = false;
  
  constructor(private eventBusService:EventBusService){
    
this.items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
        }
    ];
  }

  ngOnInit(){
    this.toggleMenu();
  }

  toggleMenu() {
    this.shrinkSideBar = !this.shrinkSideBar;
    this.shrinkSideNav.emit(this.shrinkSideBar);
  
  }

  logout(){
    this.eventBusService.emit(new EventData('logout', null))
  }

}
