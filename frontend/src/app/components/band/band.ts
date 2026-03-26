import { Component, inject, input } from '@angular/core';
import { Project } from '../../types/Project';
import { AppData } from '../../stores/AppData';
import { isImage, isVideo } from '../../models/Media';

@Component({
  selector: 'app-band',
  imports: [],
  templateUrl: './band.html',
  styleUrl: './band.css',
})
export class Band {

  data=inject(AppData);
  project = input.required<Project>();

  //bricolo, ca devrait etre un service injecté et plus une petite utility d'un model?
  checkVideo = isVideo;
  checkImage = isImage;

  //appdata?
  videoUrl = '/videos/';
  imgUrl = '/images/';

}
