import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';
import { mainModule } from 'process';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(private menu: MenuController, public authservice: AuthService){ }

  ngOnInit() {
  }

  openMenu(){
    this.menu.open('end');
  }
 
 

}
