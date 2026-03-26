import { Component, inject } from '@angular/core';


import { AppData } from '../../stores/AppData';
import { isProject, Project, ProjectData, loadProjectsData } from '../../types/Project';
import { Band } from '../band/band';
import { Loader } from '../loader/loader';
import { ProjectCard } from "../project-card/project-card";

@Component({
  selector: 'app-home',
  imports: [Band, Loader, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
data = inject(AppData);


  ngOnInit() {

    loadProjectsData(this.data);
    
  }
}
