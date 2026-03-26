import { Component, inject, input } from '@angular/core';
import { AppData } from '../../stores/AppData';
import { isImage, isVideo } from '../../models/Media';
import { Project } from '../../types/Project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  data=inject(AppData);
  project = input.required<Project>();

  //bricolo, ca devrait etre un service injecté et plus une petite utility d'un model?
  checkVideo = isVideo;
  checkImage = isImage;

  //appdata?
  videoUrl = '/videos/';
  imgUrl = '/images/';

  splitStack(stack : string) : string[]
  {
    return stack.split("/");
  }

}
