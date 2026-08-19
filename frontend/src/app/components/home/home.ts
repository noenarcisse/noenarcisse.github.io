import { Component, inject } from '@angular/core';

import { AppData } from '../../stores/AppData';
import { loadProjectsData } from '../../types/Project';
import { Loader } from '../loader/loader';
import { ProjectCard } from "../project-card/project-card";

@Component({
  selector: 'app-home',
  imports: [Loader, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
data = inject(AppData);

  ngOnInit() {
    loadProjectsData(this.data);
  }
}
