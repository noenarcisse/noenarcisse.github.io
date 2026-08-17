import { Component, inject, input } from '@angular/core';
import { AppData } from '../../stores/AppData';
import { isImage, isVideo } from '../../models/Media';
import { Project } from '../../types/Project';
import { splitStack } from '../../helpers/helpers';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  data=inject(AppData);
  project = input.required<Project>();

  checkVideo = isVideo;
  checkImage = isImage;

  splitStack = splitStack;

  //appdata?
  videoUrl = '/videos/';
  imgUrl = '/images/';

}
