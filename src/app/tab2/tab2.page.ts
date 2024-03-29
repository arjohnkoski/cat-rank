import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonContent,
         IonFab,
         IonFabButton,
         IonHeader,
         IonIcon,
         IonTitle,
         IonToolbar } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ ExploreContainerComponent,
             IonContent,
             IonFab,
             IonFabButton,
             IonHeader,
             IonIcon,
             IonTitle,
             IonToolbar ]
})
export class Tab2Page {
  public icons: any = { camera };

  constructor(private cameraService: CameraService) {
    addIcons(this.icons);
  }

  takePhoto() {
    this.cameraService.takePhoto();
  }
}
