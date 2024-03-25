import { addIcons } from 'ionicons';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs,
         IonTabBar,
         IonTabButton,
         IonIcon,
         IonLabel } from '@ionic/angular/standalone';
import { triangle, cameraOutline, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  public icons: any = { triangle, cameraOutline, square };

  constructor() {
    addIcons(this.icons);
  }
}
