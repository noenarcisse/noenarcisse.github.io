import { Component, computed, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { loadProjectsData, Project } from '../../types/Project';
import { AppData } from '../../stores/AppData';
import { isImage, isVideo } from '../../models/Media';
import { Loader } from '../loader/loader';
import { splitStack } from '../../helpers/helpers';

@Component({
  selector: 'app-project-page',
  imports: [Loader],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {

  data = inject(AppData);
  private router = inject(Router);

  fullPath : string = this.router.url;
  projectTitle : string = this.fullPath.replace("/project/", "");
  projectData = computed(() => this.data.projects().find(project => project.url.toLowerCase() === this.projectTitle));

  checkImage = isImage;
  checkVideo = isVideo;

  splitStack = splitStack;

  videoUrl = '/videos/';
  imgUrl = '/images/';


  constructor()
  {
        console.log(this.fullPath);
        console.log(this.projectTitle);
  }

  ngOnInit()
  {
    loadProjectsData(this.data);
    //this.projectData = this.data.projects().find(project => project.title.toLowerCase() === this.projectTitle);
  }

}
