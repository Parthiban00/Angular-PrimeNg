import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component'
import { PrimeNgModule } from '../shared/prime-ng.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
    
  ],
  exports: [
    PrimeNgModule
  ]
})
export class ShellModule { }
