import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Account',
      url: '/account',
      icon: 'wallet'
    },
    {
      title: 'Shop detail',
      url: '/shopdetail',
      icon: 'wallet'
    },
    {
      title: 'My Packages',
      url: '/packages',
      icon: 'cube'
    },
    {
      title: 'Shops Nearby',
      url: '/shoplist',
      icon: 'compass'
    },
    {
      title: 'Browse',
      url: '/productlist',
      icon: 'radio-button-off'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'options'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
